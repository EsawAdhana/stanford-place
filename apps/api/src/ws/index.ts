import type { FastifyInstance } from "fastify";
import type Redis from "ioredis";

import { websocketMessageSchema } from "@stanfordplace/shared";

import { verifyAppToken } from "../auth.js";
import type { AppState } from "../state.js";

function presenceMessage(onlineCount: number) {
  return JSON.stringify({
    type: "presence:update",
    payload: { onlineCount }
  });
}

export async function registerWebsocket(
  server: FastifyInstance,
  redisSubscriber: Redis,
  state: AppState
) {
  await redisSubscriber.subscribe("board:events");
  redisSubscriber.on("message", (_channel, message) => {
    const parsed = websocketMessageSchema.safeParse(JSON.parse(message));

    if (parsed.success) {
      state.broadcast(JSON.stringify(parsed.data));
    }
  });

  server.get("/ws", { websocket: true }, async (socket, request) => {
    const token = (request.query as Record<string, string | undefined>).token;

    if (!token) {
      socket.close(1008, "Missing token");
      return;
    }

    try {
      await verifyAppToken(token);
    } catch {
      socket.close(1008, "Invalid token");
      return;
    }

    state.addSocket(socket);
    state.broadcast(presenceMessage(state.onlineCount));

    socket.on("message", () => {
      // The server does not accept client-originated realtime mutations.
    });

    socket.on("close", () => {
      state.removeSocket(socket);
      state.broadcast(presenceMessage(state.onlineCount));
    });
  });
}
