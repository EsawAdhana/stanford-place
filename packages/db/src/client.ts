import { PrismaPg } from "@prisma/adapter-pg";

import { PrismaClient } from "../generated/client/client.js";

declare global {
  var __stanfordplacePrisma: PrismaClient | undefined;
}

const connectionString =
  process.env.DATABASE_URL ??
  "postgresql://postgres:postgres@localhost:5432/stanfordplace?schema=public";

const adapter = new PrismaPg({
  connectionString
});

export const prisma =
  globalThis.__stanfordplacePrisma ??
  new PrismaClient({
    adapter,
    log: process.env.NODE_ENV === "development" ? ["warn", "error"] : ["error"]
  });

if (process.env.NODE_ENV !== "production") {
  globalThis.__stanfordplacePrisma = prisma;
}

export * from "../generated/client/client.js";
