import { NextResponse } from "next/server";

import { requireAppUser } from "../../../../lib/session-user";
import { createSupabaseAccessToken } from "../../../../lib/supabase/token";
import { RouteError } from "../../../../lib/http-errors";

export async function GET() {
  try {
    const user = await requireAppUser();
    const token = await createSupabaseAccessToken(user);

    return NextResponse.json(
      { token },
      {
        headers: {
          "Cache-Control": "no-store"
        }
      }
    );
  } catch (error) {
    if (error instanceof RouteError) {
      return NextResponse.json({ message: error.message }, { status: error.status });
    }

    return NextResponse.json(
      { message: "Unable to create Supabase token." },
      { status: 500 }
    );
  }
}
