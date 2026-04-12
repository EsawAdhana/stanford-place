import type Redis from "ioredis";

type LimitResult = {
  allowed: boolean;
  remaining: number;
};

export async function consumeRateLimit(
  redis: Redis,
  key: string,
  limit: number,
  windowSeconds: number
): Promise<LimitResult> {
  const tx = redis.multi();
  tx.incr(key);
  tx.expire(key, windowSeconds, "NX");
  const results = await tx.exec();
  const count = Number(results?.[0]?.[1] ?? 0);

  return {
    allowed: count <= limit,
    remaining: Math.max(limit - count, 0)
  };
}
