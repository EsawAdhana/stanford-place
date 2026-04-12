import Fastify from "fastify";
import cors from "@fastify/cors";
import websocket from "@fastify/websocket";
import Redis from "ioredis";

import { prisma } from "@stanfordplace/db";

import { env } from "./config.js";
import { metricsRegistry } from "./metrics.js";
import { registerAdminRoutes } from "./routes/admin.js";
import { registerGetBoardTileRoute } from "./routes/getBoardTile.js";
import { registerMeRoute } from "./routes/me.js";
import { registerPlacePixelRoute } from "./routes/placePixel.js";
import { registerSnapshotRoute } from "./routes/snapshot.js";
import { AppState } from "./state.js";
import { registerWebsocket } from "./ws/index.js";

async function main() {
  const app = Fastify({
    logger: true
  });

  const redis = new Redis(env.REDIS_URL);
  const redisSubscriber = new Redis(env.REDIS_URL);
  const state = new AppState(redis);

  await prisma.$connect();

  await app.register(cors, {
    origin: env.WEB_ORIGIN,
    credentials: true
  });
  await app.register(websocket);

  app.get("/healthz", async () => ({ status: "ok" }));
  app.get("/metrics", async (_request, reply) => {
    reply.header("Content-Type", metricsRegistry.contentType);
    return metricsRegistry.metrics();
  });

  await registerGetBoardTileRoute(app);
  await registerMeRoute(app);
  await registerSnapshotRoute(app, state);
  await registerPlacePixelRoute(app, redis, state);
  await registerAdminRoutes(app, redis, state);
  await registerWebsocket(app, redisSubscriber, state);

  app.addHook("onClose", async () => {
    await Promise.all([
      prisma.$disconnect(),
      redis.quit(),
      redisSubscriber.quit()
    ]);
  });

  await app.listen({
    host: env.HOST,
    port: env.PORT
  });
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
