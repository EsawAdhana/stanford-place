import { NextResponse } from "next/server";

import { adminRevertRangeSchema } from "@stanfordplace/shared";

import { RouteError } from "../../../../lib/http-errors";
import { readJsonBody } from "../../../../lib/request-body";
import { requireAdminUser } from "../../../../lib/session-user";
import { getSupabaseAdmin } from "../../../../lib/supabase/admin";

const MAX_REVERT_AREA = 4096;
const RANGE_REVERT_ENABLED = false;

type PlacementRow = {
  x: number;
  y: number;
  color: number;
  user_id: string;
  placed_at: string;
};

export async function POST(request: Request) {
  try {
    await requireAdminUser();

    if (!RANGE_REVERT_ENABLED) {
      return NextResponse.json(
        {
          message:
            "Range revert is temporarily disabled for launch while the operation is moved into a single database transaction."
        },
        { status: 503 }
      );
    }

    const parsed = adminRevertRangeSchema.safeParse(await readJsonBody(request));

    if (!parsed.success) {
      return NextResponse.json(
        {
          message: "Invalid revert range payload",
          issues: parsed.error.flatten()
        },
        { status: 400 }
      );
    }

    const { minX, minY, maxX, maxY } = parsed.data;
    const width = maxX - minX + 1;
    const height = maxY - minY + 1;

    if (width <= 0 || height <= 0) {
      return NextResponse.json({ message: "Invalid range bounds" }, { status: 400 });
    }

    if (width * height > MAX_REVERT_AREA) {
      return NextResponse.json(
        {
          message: `Range too large. Maximum supported area is ${MAX_REVERT_AREA} pixels.`
        },
        { status: 400 }
      );
    }

    const supabase = getSupabaseAdmin();
    const changedPixels: Array<{
      x: number;
      y: number;
      color: number | null;
      userId: string | null;
      updatedAt: string;
    }> = [];

    for (let x = minX; x <= maxX; x += 1) {
      for (let y = minY; y <= maxY; y += 1) {
        const { data: placements, error } = await supabase
          .from("placements")
          .select("x, y, color, user_id, placed_at")
          .eq("x", x)
          .eq("y", y)
          .order("placed_at", { ascending: false })
          .limit(2);

        if (error) {
          throw new Error(error.message);
        }

        const typedPlacements = (placements ?? []) as PlacementRow[];

        if (typedPlacements.length === 0) {
          continue;
        }

        if (typedPlacements.length === 1) {
          const { error: deleteError } = await supabase
            .from("current_pixels")
            .delete()
            .eq("x", x)
            .eq("y", y);

          if (deleteError) {
            throw new Error(deleteError.message);
          }

          changedPixels.push({
            x,
            y,
            color: null,
            userId: null,
            updatedAt: new Date().toISOString()
          });
          continue;
        }

        const previous = typedPlacements[1];
        const { error: upsertError } = await supabase
          .from("current_pixels")
          .upsert(
            {
              x,
              y,
              color: previous.color,
              updated_at: previous.placed_at,
              updated_by: previous.user_id
            },
            { onConflict: "x,y" }
          );

        if (upsertError) {
          throw new Error(upsertError.message);
        }

        changedPixels.push({
          x,
          y,
          color: previous.color,
          userId: previous.user_id,
          updatedAt: previous.placed_at
        });
      }
    }

    return NextResponse.json({
      revertedCount: changedPixels.length,
      changedPixels
    });
  } catch (error) {
    if (error instanceof RouteError) {
      return NextResponse.json({ message: error.message }, { status: error.status });
    }

    return NextResponse.json(
      { message: "Unable to revert selected range." },
      { status: 500 }
    );
  }
}
