import type Redis from "ioredis";
import type { WebSocket } from "ws";

import { env } from "./config.js";
import { websocketConnections } from "./metrics.js";

const READ_ONLY_KEY = "board:read_only";

export class AppState {
  private sockets = new Set<WebSocket>();

  constructor(private readonly redis: Redis) {}

  addSocket(socket: WebSocket) {
    this.sockets.add(socket);
    websocketConnections.set(this.sockets.size);
  }

  removeSocket(socket: WebSocket) {
    this.sockets.delete(socket);
    websocketConnections.set(this.sockets.size);
  }

  get onlineCount() {
    return this.sockets.size;
  }

  broadcast(raw: string) {
    for (const socket of this.sockets) {
      if (socket.readyState === socket.OPEN) {
        socket.send(raw);
      }
    }
  }

  async isReadOnly() {
    const override = await this.redis.get(READ_ONLY_KEY);

    if (override === "true") {
      return true;
    }

    if (override === "false") {
      return false;
    }

    return env.BOARD_READ_ONLY === "true";
  }

  async setReadOnly(value: boolean) {
    await this.redis.set(READ_ONLY_KEY, String(value));
  }
}
