"use client";

import { createClient, type SupabaseClient } from "@supabase/supabase-js";

type LooseDatabase = {
  public: {
    Tables: Record<
      string,
      {
        Row: Record<string, unknown>;
        Insert: Record<string, unknown>;
        Update: Record<string, unknown>;
        Relationships: [];
      }
    >;
    Views: Record<string, never>;
    Functions: Record<
      string,
      {
        Args: Record<string, unknown>;
        Returns: unknown;
      }
    >;
    Enums: Record<string, never>;
    CompositeTypes: Record<string, never>;
  };
};

let browserClient: SupabaseClient<LooseDatabase> | undefined;

async function getAccessToken() {
  const response = await fetch("/api/supabase/token", {
    cache: "no-store"
  });

  if (!response.ok) {
    throw new Error("Unable to get Supabase access token.");
  }

  const payload = (await response.json()) as { token: string };
  return payload.token;
}

export function getBrowserSupabase() {
  if (browserClient) {
    return browserClient;
  }

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !anonKey) {
    throw new Error("Supabase browser configuration is missing.");
  }

  browserClient = createClient(url, anonKey, {
    accessToken: getAccessToken
  });

  return browserClient;
}
