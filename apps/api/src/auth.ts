import { jwtVerify } from "jose";
import type { FastifyRequest } from "fastify";
import type { AppTokenClaims } from "@stanfordplace/shared";

import { env } from "./config.js";

const secret = new TextEncoder().encode(env.APP_JWT_SECRET);

export class AuthError extends Error {
  statusCode: number;

  constructor(message: string, statusCode = 401) {
    super(message);
    this.statusCode = statusCode;
  }
}

export async function authenticateRequest(
  request: FastifyRequest
): Promise<AppTokenClaims> {
  const header = request.headers.authorization;

  if (!header?.startsWith("Bearer ")) {
    throw new AuthError("Missing bearer token");
  }

  const token = header.slice("Bearer ".length);

  try {
    return await verifyAppToken(token);
  } catch (error) {
    if (error instanceof AuthError) {
      throw error;
    }

    throw new AuthError("Invalid token");
  }
}

export async function verifyAppToken(token: string): Promise<AppTokenClaims> {
  const result = await jwtVerify(token, secret, {
    issuer: "stanfordplace-web",
    audience: "stanfordplace-api"
  });

  const payload = result.payload;

  if (
    typeof payload.sub !== "string" ||
    typeof payload.email !== "string" ||
    typeof payload.isAdmin !== "boolean"
  ) {
    throw new AuthError("Token payload is missing required claims");
  }

  return {
    sub: payload.sub,
    email: payload.email,
    name: typeof payload.name === "string" ? payload.name : null,
    picture: typeof payload.picture === "string" ? payload.picture : null,
    isAdmin: payload.isAdmin
  };
}
