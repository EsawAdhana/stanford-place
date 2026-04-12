import type { FastifyInstance } from "fastify";

import { prisma } from "@stanfordplace/db";
import { BOARD_SIZE, TILE_SIZE } from "@stanfordplace/shared";

import { AuthError, authenticateRequest } from "../auth.js";
import type { AppState } from "../state.js";

export async function registerSnapshotRoute(
  server: FastifyInstance,
  state: AppState
) {
  server.get("/snapshot", async (request, reply) => {
    try {
      await authenticateRequest(request);
      const recentPlacements = await prisma.placement.findMany({
        orderBy: { placedAt: "desc" },
        take: 15,
        select: {
          x: true,
          y: true,
          color: true,
          placedAt: true,
          userId: true
        }
      });

      const serializedPlacements = [];
      for (const placement of recentPlacements) {
        serializedPlacements.push({
          x: placement.x,
          y: placement.y,
          color: placement.color,
          userId: placement.userId,
          updatedAt: placement.placedAt.toISOString()
        });
      }

      return {
        boardSize: BOARD_SIZE,
        tileSize: TILE_SIZE,
        onlineCount: state.onlineCount,
        recentPlacements: serializedPlacements
      };
    } catch (error) {
      if (error instanceof AuthError) {
        return reply.status(error.statusCode).send({ message: error.message });
      }

      throw error;
    }
  });
}
