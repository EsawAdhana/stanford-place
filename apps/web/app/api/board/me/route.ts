import { NextResponse } from "next/server";

import { getAppUserById } from "../../../../lib/app-user";
import { RouteError } from "../../../../lib/http-errors";
import { requireAppUser } from "../../../../lib/session-user";

export async function GET() {
  try {
    const sessionUser = await requireAppUser();
    const user = await getAppUserById(sessionUser.id);

    if (!user) {
      throw new RouteError("User not found", 404);
    }

    return NextResponse.json(user, {
      headers: {
        "Cache-Control": "no-store"
      }
    });
  } catch (error) {
    if (error instanceof RouteError) {
      return NextResponse.json({ message: error.message }, { status: error.status });
    }

    return NextResponse.json(
      { message: "Unable to load current user." },
      { status: 500 }
    );
  }
}
