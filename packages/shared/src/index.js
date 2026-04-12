import { z } from "zod";
export const BOARD_SIZE = 250;
export const TILE_SIZE = 64;
export const PLACEMENT_COOLDOWN_MS = 60 * 1000;
export const MAX_TILE_COORDINATE = Math.ceil(BOARD_SIZE / TILE_SIZE) - 1;
export const PALETTE = [
    "#FFFFFF",
    "#E4E4E4",
    "#888888",
    "#222222",
    "#FFA7D1",
    "#E50000",
    "#E59500",
    "#A06A42",
    "#E5D900",
    "#94E044",
    "#02BE01",
    "#00D3DD",
    "#0083C7",
    "#0000EA",
    "#CF6EE4",
    "#820080",
    "#FFB470",
    "#F87171",
    "#FB7185",
    "#F472B6",
    "#C084FC",
    "#818CF8",
    "#60A5FA",
    "#38BDF8",
    "#22D3EE",
    "#2DD4BF",
    "#34D399",
    "#4ADE80",
    "#A3E635",
    "#FACC15",
    "#FB923C",
    "#9CA3AF"
];
export const coordinateSchema = z.object({
    x: z.number().int().min(0).max(BOARD_SIZE - 1),
    y: z.number().int().min(0).max(BOARD_SIZE - 1)
});
export const tileRequestSchema = z.object({
    tileX: z.number().int().min(0).max(MAX_TILE_COORDINATE),
    tileY: z.number().int().min(0).max(MAX_TILE_COORDINATE)
});
export const placePixelSchema = coordinateSchema.extend({
    color: z.number().int().min(0).max(PALETTE.length - 1)
});
export const adminSuspendSchema = z.object({
    userId: z.string().uuid(),
    reason: z.string().min(3).max(500),
    expiresAt: z.string().datetime().optional()
});
export const adminReadOnlySchema = z.object({
    readOnly: z.boolean()
});
export const adminRevertRangeSchema = z.object({
    minX: z.number().int().min(0).max(BOARD_SIZE - 1),
    minY: z.number().int().min(0).max(BOARD_SIZE - 1),
    maxX: z.number().int().min(0).max(BOARD_SIZE - 1),
    maxY: z.number().int().min(0).max(BOARD_SIZE - 1)
});
export const websocketMessageSchema = z.discriminatedUnion("type", [
    z.object({
        type: z.literal("pixel:placed"),
        payload: z.object({
            x: z.number().int(),
            y: z.number().int(),
            color: z.number().int(),
            updatedAt: z.string(),
            userId: z.string()
        })
    }),
    z.object({
        type: z.literal("presence:update"),
        payload: z.object({
            onlineCount: z.number().int().nonnegative()
        })
    })
]);
export function tileBounds(tileX, tileY) {
    const minX = tileX * TILE_SIZE;
    const minY = tileY * TILE_SIZE;
    return {
        minX,
        minY,
        maxX: Math.min(minX + TILE_SIZE - 1, BOARD_SIZE - 1),
        maxY: Math.min(minY + TILE_SIZE - 1, BOARD_SIZE - 1)
    };
}
