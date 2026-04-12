import { RouteError } from "./http-errors";

export async function readJsonBody(request: Request): Promise<unknown> {
  try {
    return await request.json();
  } catch {
    throw new RouteError("Invalid JSON body", 400);
  }
}
