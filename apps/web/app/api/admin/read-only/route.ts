import { NextResponse } from "next/server";

import { adminReadOnlySchema } from "@stanfordplace/shared";

import { RouteError } from "../../../../lib/http-errors";
import { readJsonBody } from "../../../../lib/request-body";
import { requireAdminUser } from "../../../../lib/session-user";
import { getSupabaseAdmin } from "../../../../lib/supabase/admin";

export async function POST(request: Request) {
  try {
    await requireAdminUser();
    const parsed = adminReadOnlySchema.safeParse(await readJsonBody(request));

    if (!parsed.success) {
      return NextResponse.json(
        {
          message: "Invalid read-only payload",
          issues: parsed.error.flatten()
        },
        { status: 400 }
      );
    }

    const supabase = getSupabaseAdmin();
    const { data, error } = await supabase
      .from("app_settings")
      .upsert(
        {
          id: true,
          read_only: parsed.data.readOnly
        },
        { onConflict: "id" }
      )
      .select("read_only")
      .single();

    if (error || !data) {
      throw new Error(error?.message ?? "Unable to update read-only mode.");
    }

    const settings = data as { read_only: boolean };

    return NextResponse.json({
      readOnly: settings.read_only
    });
  } catch (error) {
    if (error instanceof RouteError) {
      return NextResponse.json({ message: error.message }, { status: error.status });
    }

    return NextResponse.json(
      { message: "Unable to update read-only mode." },
      { status: 500 }
    );
  }
}
