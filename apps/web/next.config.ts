import type { NextConfig } from "next";

function getAllowedDevOrigins() {
  const configuredOrigins = [process.env.AUTH_URL, process.env.NEXTAUTH_URL]
    .filter((value): value is string => Boolean(value))
    .flatMap((value) => {
      try {
        return [new URL(value).host];
      } catch {
        return [];
      }
    });

  return Array.from(new Set(configuredOrigins));
}

const nextConfig: NextConfig = {
  typedRoutes: true,
  allowedDevOrigins: getAllowedDevOrigins()
};

export default nextConfig;
