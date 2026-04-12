import type { AppUser } from "@stanfordplace/shared";

import { auth } from "../auth";
import { RouteError } from "./http-errors";

export async function requireAppUser(): Promise<AppUser> {
  const session = await auth();

  if (!session?.appUser) {
    throw new RouteError("Unauthorized", 401);
  }

  return session.appUser;
}
