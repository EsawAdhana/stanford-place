import { NextResponse } from "next/server";

import {
  BOARD_SIZE,
  TILE_SIZE,
  tileBounds,
  tileRequestSchema
} from "@stanfordplace/shared";

import { RouteError } from "../../../../lib/http-errors";
import { requireAppUser } from "../../../../lib/session-user";
import { getSupabaseAdmin } from "../../../../lib/supabase/admin";

type CurrentPixelRow = {
  x: number;
  y: number;
  color: number;
  updated_at: string;
};

export async function GET(request: Request) {
  try {
    await requireAppUser();
    const url = new URL(request.url);
    const parsed = tileRequestSchema.safeParse({
      tileX: Number(url.searchParams.get("tileX")),
      tileY: Number(url.searchParams.get("tileY"))
    });

    if (!parsed.success) {
      return NextResponse.json(
        {
          message: "Invalid tile coordinates",
          issues: parsed.error.flatten()
        },
        { status: 400 }
      );
    }

    const { tileX, tileY } = parsed.data;
    const bounds = tileBounds(tileX, tileY);
    const supabase = getSupabaseAdmin();
    const { data, error } = await supabase
      .from("current_pixels")
      .select("x, y, color, updated_at")
      .gte("x", bounds.minX)
      .lte("x", bounds.maxX)
      .gte("y", bounds.minY)
      .lte("y", bounds.maxY)
      .order("y", { ascending: true })
      .order("x", { ascending: true });

    if (error) {
      throw new Error(error.message);
    }

    const pixels = (data ?? []) as CurrentPixelRow[];

    return NextResponse.json(
      {
        tileX,
        tileY,
        tileSize: TILE_SIZE,
        boardSize: BOARD_SIZE,
        pixels: pixels.map((pixel) => ({
          x: pixel.x,
          y: pixel.y,
          color: pixel.color,
          updatedAt: pixel.updated_at
        })),
        generatedAt: new Date().toISOString()
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
      { message: "Unable to load board tile." },
      { status: 500 }
    );
  }
}
