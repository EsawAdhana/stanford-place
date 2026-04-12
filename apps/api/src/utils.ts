import { createHash } from "node:crypto";

export function sha256(input: string | undefined) {
  if (!input) {
    return null;
  }

  return createHash("sha256").update(input).digest("hex");
}
