import { NextResponse } from "next/server";

import { adminSuspendSchema } from "@stanfordplace/shared";

import { RouteError } from "../../../../lib/http-errors";
import { readJsonBody } from "../../../../lib/request-body";
import { requireAdminUser } from "../../../../lib/session-user";
import { getSupabaseAdmin } from "../../../../lib/supabase/admin";

type SuspensionRow = {
  id: string;
  user_id: string;
  reason: string;
  starts_at: string;
  expires_at: string | null;
  revoked_at: string | null;
};

type UserSummaryRow = {
  id: string;
  email: string;
  display_name: string | null;
};

export async function GET() {
  try {
    await requireAdminUser();
    const supabase = getSupabaseAdmin();
    const now = new Date().toISOString();
    const [{ data: settings, error: settingsError }, { data, error }] =
      await Promise.all([
        supabase
          .from("app_settings")
          .select("read_only")
          .eq("id", true)
          .maybeSingle(),
        supabase
          .from("suspensions")
          .select("id, user_id, reason, starts_at, expires_at, revoked_at")
          .is("revoked_at", null)
          .or(`expires_at.is.null,expires_at.gt.${now}`)
          .order("created_at", { ascending: false })
      ]);

    if (settingsError) {
      throw new Error(settingsError.message);
    }

    if (error) {
      throw new Error(error.message);
    }

    const suspensions = (data ?? []) as SuspensionRow[];
    const userIds = Array.from(new Set(suspensions.map((suspension) => suspension.user_id)));
    const usersById = new Map<string, { email: string; display_name: string | null }>();

    if (userIds.length > 0) {
      const { data: users, error: usersError } = await supabase
        .from("app_users")
        .select("id, email, display_name")
        .in("id", userIds);

      if (usersError) {
        throw new Error(usersError.message);
      }

      for (const user of (users ?? []) as UserSummaryRow[]) {
        usersById.set(user.id, {
          email: user.email,
          display_name: user.display_name
        });
      }
    }

    return NextResponse.json({
      readOnly: settings?.read_only ?? false,
      suspensions: suspensions.map((suspension) => ({
        id: suspension.id,
        userId: suspension.user_id,
        email: usersById.get(suspension.user_id)?.email ?? "unknown@stanford.edu",
        displayName: usersById.get(suspension.user_id)?.display_name ?? null,
        reason: suspension.reason,
        startsAt: suspension.starts_at,
        expiresAt: suspension.expires_at
      }))
    });
  } catch (error) {
    if (error instanceof RouteError) {
      return NextResponse.json({ message: error.message }, { status: error.status });
    }

    return NextResponse.json(
      { message: "Unable to load moderation state." },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const admin = await requireAdminUser();
    const parsed = adminSuspendSchema.safeParse(await readJsonBody(request));

    if (!parsed.success) {
      return NextResponse.json(
        {
          message: "Invalid suspension payload",
          issues: parsed.error.flatten()
        },
        { status: 400 }
      );
    }

    const supabase = getSupabaseAdmin();
    const { data, error } = await supabase
      .from("suspensions")
      .insert({
        user_id: parsed.data.userId,
        reason: parsed.data.reason,
        expires_at: parsed.data.expiresAt ?? null,
        created_by: admin.id
      })
      .select("id, user_id, reason, starts_at, expires_at")
      .single();

    if (error || !data) {
      throw new Error(error?.message ?? "Unable to create suspension.");
    }

    return NextResponse.json(
      {
        id: data.id,
        userId: data.user_id,
        reason: data.reason,
        startsAt: data.starts_at,
        expiresAt: data.expires_at
      },
      { status: 201 }
    );
  } catch (error) {
    if (error instanceof RouteError) {
      return NextResponse.json({ message: error.message }, { status: error.status });
    }

    return NextResponse.json(
      { message: "Unable to create suspension." },
      { status: 500 }
    );
  }
}
