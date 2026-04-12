import { NextResponse } from "next/server";

import { placePixelSchema } from "@stanfordplace/shared";

import { sha256 } from "../../../../lib/hash";
import { RouteError } from "../../../../lib/http-errors";
import { readJsonBody } from "../../../../lib/request-body";
import { requireAppUser } from "../../../../lib/session-user";
import { getSupabaseAdmin } from "../../../../lib/supabase/admin";

type PlacePixelResult = {
  x: number;
  y: number;
  color: number;
  user_id: string;
  updated_at: string;
  next_place_at: string;
};

export async function POST(request: Request) {
  try {
    const user = await requireAppUser();
    const parsed = placePixelSchema.safeParse(await readJsonBody(request));

    if (!parsed.success) {
      return NextResponse.json(
        {
          message: "Invalid pixel placement",
          issues: parsed.error.flatten()
        },
        { status: 400 }
      );
    }

    const forwardedFor = request.headers.get("x-forwarded-for");
    const ipAddress = forwardedFor?.split(",")[0]?.trim() ?? null;
    const userAgent = request.headers.get("user-agent");
    const supabase = getSupabaseAdmin();
    const { data, error } = await supabase.rpc("place_pixel", {
      p_user_id: user.id,
      p_x: parsed.data.x,
      p_y: parsed.data.y,
      p_color: parsed.data.color,
      p_ip_hash: sha256(ipAddress),
      p_user_agent_hash: sha256(userAgent)
    });

    if (error) {
      const message = error.message.toLowerCase();

      if (message.includes("cooldown")) {
        return NextResponse.json(
          {
            accepted: false,
            reason: "COOLDOWN",
            message: "You must wait before placing another pixel."
          },
          { status: 429 }
        );
      }

      if (message.includes("read-only")) {
        return NextResponse.json(
          {
            accepted: false,
            reason: "READ_ONLY",
            message: "The board is currently read-only."
          },
          { status: 403 }
        );
      }

      if (message.includes("suspend")) {
        return NextResponse.json(
          {
            accepted: false,
            reason: "SUSPENDED",
            message: "Your account is currently suspended."
          },
          { status: 403 }
        );
      }

      throw new Error(error.message);
    }

    const rows = (data ?? []) as PlacePixelResult[];
    const placed = rows[0] ?? null;

    if (!placed) {
      throw new Error("place_pixel returned no row");
    }

    return NextResponse.json(
      {
        accepted: true,
        pixel: {
          x: placed.x,
          y: placed.y,
          color: placed.color,
          userId: placed.user_id,
          updatedAt: placed.updated_at
        },
        nextPlaceAt: placed.next_place_at
      },
      { status: 201 }
    );
  } catch (error) {
    if (error instanceof RouteError) {
      return NextResponse.json({ message: error.message }, { status: error.status });
    }

    return NextResponse.json(
      { message: "Unable to place pixel." },
      { status: 500 }
    );
  }
}
