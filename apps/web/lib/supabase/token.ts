import { SignJWT } from "jose";

import type { AppUser } from "@stanfordplace/shared";

import { getRequiredEnv } from "../env";

function getJwtSecret() {
  return new TextEncoder().encode(getRequiredEnv("SUPABASE_JWT_SECRET"));
}

export async function createSupabaseAccessToken(user: AppUser) {
  return new SignJWT({
    role: "authenticated",
    email: user.email
  })
    .setProtectedHeader({ alg: "HS256", typ: "JWT" })
    .setIssuedAt()
    .setAudience("authenticated")
    .setSubject(user.id)
    .setExpirationTime("1h")
    .sign(getJwtSecret());
}
