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

export async function requireAdminUser() {
  const user = await requireAppUser();

  if (!user.isAdmin) {
    throw new RouteError("Admin access required", 403);
  }

  return user;
}
