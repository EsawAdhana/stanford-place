import type { FastifyInstance, FastifyRequest } from "fastify";
import type Redis from "ioredis";

import { prisma } from "@stanfordplace/db";
import {
  adminReadOnlySchema,
  adminRevertRangeSchema,
  adminSuspendSchema
} from "@stanfordplace/shared";

import { AuthError, authenticateRequest } from "../auth.js";
import type { AppState } from "../state.js";

const MAX_REVERT_AREA = 4096;

async function requireAdmin(request: FastifyRequest) {
  const claims = await authenticateRequest(request);

  if (!claims.isAdmin) {
    throw new AuthError("Admin access required", 403);
  }

  return claims;
}

export async function registerAdminRoutes(
  server: FastifyInstance,
  redis: Redis,
  state: AppState
) {
  server.get("/admin/suspensions", async (request, reply) => {
    try {
      await requireAdmin(request);
      const now = new Date();
      const suspensions = await prisma.suspension.findMany({
        where: {
          revokedAt: null,
          OR: [{ expiresAt: null }, { expiresAt: { gt: now } }]
        },
        orderBy: { createdAt: "desc" },
        include: {
          user: {
            select: { email: true, displayName: true }
          }
        }
      });

      const serializedSuspensions = [];
      for (const suspension of suspensions) {
        serializedSuspensions.push({
          id: suspension.id,
          userId: suspension.userId,
          email: suspension.user.email,
          displayName: suspension.user.displayName,
          reason: suspension.reason,
          startsAt: suspension.startsAt.toISOString(),
          expiresAt: suspension.expiresAt?.toISOString() ?? null
        });
      }

      return {
        readOnly: await state.isReadOnly(),
        suspensions: serializedSuspensions
      };
    } catch (error) {
      if (error instanceof AuthError) {
        return reply.status(error.statusCode).send({ message: error.message });
      }

      throw error;
    }
  });

  server.post("/admin/suspensions", async (request, reply) => {
    try {
      const claims = await requireAdmin(request);
      const parsed = adminSuspendSchema.safeParse(request.body);

      if (!parsed.success) {
        return reply.status(400).send({
          message: "Invalid suspension payload",
          issues: parsed.error.flatten()
        });
      }

      const suspension = await prisma.suspension.create({
        data: {
          userId: parsed.data.userId,
          reason: parsed.data.reason,
          expiresAt: parsed.data.expiresAt ? new Date(parsed.data.expiresAt) : null,
          createdBy: claims.sub
        }
      });

      return reply.status(201).send({
        id: suspension.id,
        userId: suspension.userId,
        reason: suspension.reason,
        startsAt: suspension.startsAt.toISOString(),
        expiresAt: suspension.expiresAt?.toISOString() ?? null
      });
    } catch (error) {
      if (error instanceof AuthError) {
        return reply.status(error.statusCode).send({ message: error.message });
      }

      throw error;
    }
  });

  server.post("/admin/read-only", async (request, reply) => {
    try {
      await requireAdmin(request);
      const parsed = adminReadOnlySchema.safeParse(request.body);

      if (!parsed.success) {
        return reply.status(400).send({
          message: "Invalid read-only payload",
          issues: parsed.error.flatten()
        });
      }

      await state.setReadOnly(parsed.data.readOnly);

      return {
        readOnly: await state.isReadOnly()
      };
    } catch (error) {
      if (error instanceof AuthError) {
        return reply.status(error.statusCode).send({ message: error.message });
      }

      throw error;
    }
  });

  server.post("/admin/revert-range", async (request, reply) => {
    try {
      await requireAdmin(request);
      const parsed = adminRevertRangeSchema.safeParse(request.body);

      if (!parsed.success) {
        return reply.status(400).send({
          message: "Invalid revert range payload",
          issues: parsed.error.flatten()
        });
      }

      const { minX, minY, maxX, maxY } = parsed.data;
      const width = maxX - minX + 1;
      const height = maxY - minY + 1;

      if (width <= 0 || height <= 0) {
        return reply.status(400).send({ message: "Invalid range bounds" });
      }

      if (width * height > MAX_REVERT_AREA) {
        return reply.status(400).send({
          message: `Range too large. Maximum supported area is ${MAX_REVERT_AREA} pixels.`
        });
      }

      const changedPixels: Array<{ x: number; y: number; color: number | null; userId: string | null; updatedAt: string }> = [];

      for (let x = minX; x <= maxX; x += 1) {
        for (let y = minY; y <= maxY; y += 1) {
          const placements = await prisma.placement.findMany({
            where: { x, y },
            orderBy: { placedAt: "desc" },
            take: 2
          });

          if (placements.length === 0) {
            continue;
          }

          if (placements.length === 1) {
            await prisma.currentPixel.deleteMany({ where: { x, y } });
            changedPixels.push({
              x,
              y,
              color: null,
              userId: null,
              updatedAt: new Date().toISOString()
            });
            continue;
          }

          const previous = placements[1];
          await prisma.currentPixel.upsert({
            where: { x_y: { x, y } },
            update: {
              color: previous.color,
              updatedAt: previous.placedAt,
              updatedBy: previous.userId
            },
            create: {
              x,
              y,
              color: previous.color,
              updatedAt: previous.placedAt,
              updatedBy: previous.userId
            }
          });

          changedPixels.push({
            x,
            y,
            color: previous.color,
            userId: previous.userId,
            updatedAt: previous.placedAt.toISOString()
          });
        }
      }

      for (const pixel of changedPixels) {
        if (pixel.color === null || pixel.userId === null) {
          continue;
        }

        await redis.publish(
          "board:events",
          JSON.stringify({
            type: "pixel:placed",
            payload: pixel
          })
        );
      }

      return {
        revertedCount: changedPixels.length,
        changedPixels
      };
    } catch (error) {
      if (error instanceof AuthError) {
        return reply.status(error.statusCode).send({ message: error.message });
      }

      throw error;
    }
  });
}
