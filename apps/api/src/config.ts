import { config as loadEnv } from "dotenv";
import { z } from "zod";

loadEnv({ path: "../../.env" });
loadEnv();

const envSchema = z.object({
  NODE_ENV: z.enum(["development", "test", "production"]).default("development"),
  PORT: z.coerce.number().int().positive().default(4001),
  HOST: z.string().default("0.0.0.0"),
  WEB_ORIGIN: z.string().url().default("http://localhost:3000"),
  DATABASE_URL: z.string().min(1),
  REDIS_URL: z.string().min(1),
  APP_JWT_SECRET: z.string().min(32),
  BOARD_READ_ONLY: z.enum(["true", "false"]).default("false"),
  RATE_LIMIT_WINDOW_SECONDS: z.coerce.number().int().positive().default(60),
  RATE_LIMIT_MAX_ATTEMPTS: z.coerce.number().int().positive().default(10)
});

export const env = envSchema.parse(process.env);
