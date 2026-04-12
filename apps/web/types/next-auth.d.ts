import "next-auth";
import "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    appUser?: {
      id: string;
      email: string;
      displayName: string | null;
      image: string | null;
      nextPlaceAt: string | null;
    };
    user?: {
      id?: string;
      name?: string | null;
      email?: string | null;
      image?: string | null;
    };
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    userId?: string;
  }
}
