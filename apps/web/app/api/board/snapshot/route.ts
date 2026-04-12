import { NextResponse } from "next/server";

import { BOARD_SIZE, TILE_SIZE } from "@stanfordplace/shared";

import { getSupabaseAdmin } from "../../../../lib/supabase/admin";
import { RouteError } from "../../../../lib/http-errors";
import { requireAppUser } from "../../../../lib/session-user";

type PlacementRow = {
  x: number;
  y: number;
  color: number;
  user_id: string;
  placed_at: string;
};

export async function GET() {
  try {
    await requireAppUser();
    const supabase = getSupabaseAdmin();
    const { data, error } = await supabase
      .from("placements")
      .select("x, y, color, user_id, placed_at")
      .lt("x", BOARD_SIZE)
      .lt("y", BOARD_SIZE)
      .order("placed_at", { ascending: false })
      .limit(15);

    if (error) {
      throw new Error(error.message);
    }

    const recentPlacements = (data ?? []) as PlacementRow[];

    return NextResponse.json(
      {
        boardSize: BOARD_SIZE,
        tileSize: TILE_SIZE,
        onlineCount: 0,
        recentPlacements: recentPlacements.map((placement) => ({
          x: placement.x,
          y: placement.y,
          color: placement.color,
          userId: placement.user_id,
          updatedAt: placement.placed_at
        }))
      },
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
      { message: "Unable to load board snapshot." },
      { status: 500 }
    );
  }
}
