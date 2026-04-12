import type { FastifyInstance } from "fastify";

import { prisma } from "@stanfordplace/db";

import { AuthError, authenticateRequest } from "../auth.js";

export async function registerMeRoute(server: FastifyInstance) {
  server.get("/me", async (request, reply) => {
    try {
      const claims = await authenticateRequest(request);
      const user = await prisma.user.findUnique({
        where: { id: claims.sub },
        select: {
          id: true,
          email: true,
          displayName: true,
          image: true,
          isAdmin: true,
          nextPlaceAt: true
        }
      });

      if (!user) {
        return reply.status(404).send({ message: "User not found" });
      }

      return {
        id: user.id,
        email: user.email,
        displayName: user.displayName,
        image: user.image,
        isAdmin: user.isAdmin,
        nextPlaceAt: user.nextPlaceAt?.toISOString() ?? null
      };
    } catch (error) {
      if (error instanceof AuthError) {
        return reply.status(error.statusCode).send({ message: error.message });
      }

      throw error;
    }
  });
}
