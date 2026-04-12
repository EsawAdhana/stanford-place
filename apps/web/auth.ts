import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { OAuth2Client } from "google-auth-library";

import { getRequiredEnv } from "./lib/env";
import { getAppUserById, upsertGoogleWorkspaceUser } from "./lib/app-user";

const allowedHostedDomain = "stanford.edu";
const authSecret = getRequiredEnv("AUTH_SECRET");
const googleClientId = getRequiredEnv("AUTH_GOOGLE_ID");
const googleClientSecret = getRequiredEnv("AUTH_GOOGLE_SECRET");
const googleClient = new OAuth2Client(googleClientId);

export const { handlers, auth, signIn, signOut } = NextAuth({
  secret: authSecret,
  session: {
    strategy: "jwt"
  },
  providers: [
    Google({
      clientId: googleClientId,
      clientSecret: googleClientSecret,
      authorization: {
        params: {
          hd: allowedHostedDomain,
          prompt: "select_account"
        }
      }
    })
  ],
  callbacks: {
    async jwt({ token, account }) {
      if (account?.provider === "google" && account.id_token) {
        const ticket = await googleClient.verifyIdToken({
          idToken: account.id_token,
          audience: googleClientId
        });
        const payload = ticket.getPayload();

        if (
          !payload?.sub ||
          !payload.email ||
          !payload.email_verified ||
          payload.hd !== allowedHostedDomain
        ) {
          throw new Error("Sign-in is restricted to Stanford Google Workspace accounts.");
        }

        const email = payload.email.toLowerCase();
        const user = await upsertGoogleWorkspaceUser({
          googleSub: payload.sub,
          email,
          displayName: payload.name ?? email,
          image: payload.picture ?? null
        });

        token.userId = user.id;
        token.email = user.email;
        token.name = user.displayName;
        token.picture = user.image;
      }

      if (typeof token.userId === "string") {
        const user = await getAppUserById(token.userId);

        if (user) {
          token.userId = user.id;
          token.email = user.email;
          token.name = user.displayName;
          token.picture = user.image;
        }
      }

      return token;
    },
    async session({ session, token }) {
      if (typeof token.userId !== "string" || typeof token.email !== "string") {
        return session;
      }

      const user = await getAppUserById(token.userId);

      if (!user) {
        return session;
      }

      session.user = {
        ...session.user,
        id: user.id,
        email: user.email,
        name: user.displayName ?? session.user?.name ?? user.email,
        image: user.image
      };
      session.appUser = {
        id: user.id,
        email: user.email,
        displayName: user.displayName,
        image: user.image,
        nextPlaceAt: user.nextPlaceAt ?? null
      };

      return session;
    }
  }
});
