import type { FastifyInstance } from "fastify";

import { prisma } from "@stanfordplace/db";
import { tileBounds, tileRequestSchema, TILE_SIZE, BOARD_SIZE } from "@stanfordplace/shared";

import { AuthError, authenticateRequest } from "../auth.js";

export async function registerGetBoardTileRoute(server: FastifyInstance) {
  server.get("/tiles", async (request, reply) => {
    try {
      await authenticateRequest(request);

      const parsed = tileRequestSchema.safeParse({
        tileX: Number((request.query as Record<string, string | undefined>).tileX),
        tileY: Number((request.query as Record<string, string | undefined>).tileY)
      });

      if (!parsed.success) {
        return reply.status(400).send({
          message: "Invalid tile coordinates",
          issues: parsed.error.flatten()
        });
      }

      const { tileX, tileY } = parsed.data;
      const bounds = tileBounds(tileX, tileY);
      const pixels = await prisma.currentPixel.findMany({
        where: {
          x: { gte: bounds.minX, lte: bounds.maxX },
          y: { gte: bounds.minY, lte: bounds.maxY }
        },
        orderBy: [{ y: "asc" }, { x: "asc" }],
        select: {
          x: true,
          y: true,
          color: true,
          updatedAt: true
        }
      });

      const serializedPixels = [];
      for (const pixel of pixels) {
        serializedPixels.push({
          x: pixel.x,
          y: pixel.y,
          color: pixel.color,
          updatedAt: pixel.updatedAt.toISOString()
        });
      }

      return {
        tileX,
        tileY,
        tileSize: TILE_SIZE,
        boardSize: BOARD_SIZE,
        pixels: serializedPixels,
        generatedAt: new Date().toISOString()
      };
    } catch (error) {
      if (error instanceof AuthError) {
        return reply.status(error.statusCode).send({ message: error.message });
      }

      throw error;
    }
  });
}
