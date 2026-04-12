import { performance } from "node:perf_hooks";

import type { FastifyInstance } from "fastify";
import type Redis from "ioredis";

import { prisma } from "@stanfordplace/db";
import {
  PLACEMENT_COOLDOWN_MS,
  placePixelSchema,
  type PlacementEvent
} from "@stanfordplace/shared";

import { AuthError, authenticateRequest } from "../auth.js";
import { env } from "../config.js";
import { placementAttempts, placementLatencyMs } from "../metrics.js";
import { consumeRateLimit } from "../rateLimit.js";
import type { AppState } from "../state.js";
import { sha256 } from "../utils.js";

class PlacementError extends Error {
  constructor(
    message: string,
    public readonly statusCode: number,
    public readonly payload: Record<string, unknown>
  ) {
    super(message);
  }
}

export async function registerPlacePixelRoute(
  server: FastifyInstance,
  redis: Redis,
  state: AppState
) {
  server.post("/place", async (request, reply) => {
    const startedAt = performance.now();

    try {
      const claims = await authenticateRequest(request);
      const parsed = placePixelSchema.safeParse(request.body);

      if (!parsed.success) {
        placementAttempts.inc({ outcome: "invalid" });
        return reply.status(400).send({
          message: "Invalid pixel placement",
          issues: parsed.error.flatten()
        });
      }

      if (await state.isReadOnly()) {
        placementAttempts.inc({ outcome: "read_only" });
        return reply.status(403).send({
          accepted: false,
          reason: "READ_ONLY",
          message: "The board is currently read-only."
        });
      }

      const ipLimit = await consumeRateLimit(
        redis,
        `ratelimit:place:ip:${request.ip}`,
        env.RATE_LIMIT_MAX_ATTEMPTS,
        env.RATE_LIMIT_WINDOW_SECONDS
      );
      const userLimit = await consumeRateLimit(
        redis,
        `ratelimit:place:user:${claims.sub}`,
        env.RATE_LIMIT_MAX_ATTEMPTS,
        env.RATE_LIMIT_WINDOW_SECONDS
      );

      if (!ipLimit.allowed || !userLimit.allowed) {
        placementAttempts.inc({ outcome: "rate_limited" });
        return reply.status(429).send({
          accepted: false,
          reason: "RATE_LIMITED",
          message: "Too many placement attempts. Please wait a moment."
        });
      }

      const now = new Date();
      const nextPlaceAt = new Date(now.getTime() + PLACEMENT_COOLDOWN_MS);
      const { x, y, color } = parsed.data;

      const event = await prisma.$transaction(async (tx) => {
        const [userRecord] = await tx.$queryRaw<
          { id: string; nextPlaceAt: Date | null }[]
        >`SELECT id, "nextPlaceAt" FROM "User" WHERE id = ${claims.sub}::uuid FOR UPDATE`;

        if (!userRecord) {
          throw new PlacementError("User not found", 404, {
            accepted: false,
            message: "User not found"
          });
        }

        const suspension = await tx.suspension.findFirst({
          where: {
            userId: claims.sub,
            revokedAt: null,
            startsAt: { lte: now },
            OR: [{ expiresAt: null }, { expiresAt: { gt: now } }]
          },
          orderBy: { startsAt: "desc" }
        });

        if (suspension) {
          throw new PlacementError("User is suspended", 403, {
            accepted: false,
            reason: "SUSPENDED",
            message: suspension.reason
          });
        }

        if (userRecord.nextPlaceAt && userRecord.nextPlaceAt > now) {
          throw new PlacementError("Cooldown active", 429, {
            accepted: false,
            reason: "COOLDOWN",
            nextPlaceAt: userRecord.nextPlaceAt.toISOString(),
            message: "You must wait 5 seconds before placing another pixel."
          });
        }

        const placement = await tx.placement.create({
          data: {
            userId: claims.sub,
            x,
            y,
            color,
            ipHash: sha256(request.ip),
            userAgentHash: sha256(request.headers["user-agent"])
          }
        });

        await tx.currentPixel.upsert({
          where: {
            x_y: { x, y }
          },
          update: {
            color,
            updatedAt: now,
            updatedBy: claims.sub
          },
          create: {
            x,
            y,
            color,
            updatedAt: now,
            updatedBy: claims.sub
          }
        });

        await tx.user.update({
          where: { id: claims.sub },
          data: {
            nextPlaceAt,
            lastSeenAt: now
          }
        });

        return {
          x,
          y,
          color,
          userId: claims.sub,
          updatedAt: placement.placedAt.toISOString()
        } satisfies PlacementEvent;
      });

      placementAttempts.inc({ outcome: "accepted" });
      await redis.publish(
        "board:events",
        JSON.stringify({
          type: "pixel:placed",
          payload: event
        })
      );

      return reply.status(201).send({
        accepted: true,
        pixel: event,
        nextPlaceAt: nextPlaceAt.toISOString()
      });
    } catch (error) {
      if (error instanceof AuthError) {
        placementAttempts.inc({ outcome: "auth_error" });
        return reply.status(error.statusCode).send({ message: error.message });
      }

      if (error instanceof PlacementError) {
        const outcome =
          typeof error.payload.reason === "string" ? error.payload.reason : "rejected";
        placementAttempts.inc({ outcome });
        return reply.status(error.statusCode).send(error.payload);
      }

      throw error;
    } finally {
      placementLatencyMs.observe(performance.now() - startedAt);
    }
  });
}
