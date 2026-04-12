import type { AppUser } from "@stanfordplace/shared";

import { getSupabaseAdmin } from "./supabase/admin";

type AppUserRow = {
  id: string;
  google_sub: string;
  email: string;
  display_name: string | null;
  image_url: string | null;
  next_place_at: string | null;
};

function normalizeEmail(email: string) {
  return email.trim().toLowerCase();
}

function toAppUser(row: AppUserRow): AppUser {
  return {
    id: row.id,
    email: row.email,
    displayName: row.display_name,
    image: row.image_url,
    nextPlaceAt: row.next_place_at
  };
}

export async function upsertGoogleWorkspaceUser(params: {
  googleSub: string;
  email: string;
  displayName: string | null;
  image: string | null;
}) {
  const supabase = getSupabaseAdmin();
  const normalizedEmail = normalizeEmail(params.email);
  const { data, error } = await supabase
    .from("app_users")
    .upsert(
      {
        google_sub: params.googleSub,
        email: normalizedEmail,
        display_name: params.displayName,
        image_url: params.image,
        last_seen_at: new Date().toISOString()
      },
      {
        onConflict: "google_sub"
      }
    )
    .select("id, google_sub, email, display_name, image_url, next_place_at")
    .single();

  if (error || !data) {
    throw new Error(error?.message ?? "Failed to upsert Stanford user.");
  }

  return toAppUser(data as AppUserRow);
}

export async function getAppUserById(id: string) {
  const supabase = getSupabaseAdmin();
  const { data, error } = await supabase
    .from("app_users")
    .select("id, google_sub, email, display_name, image_url, next_place_at")
    .eq("id", id)
    .maybeSingle();

  if (error) {
    throw new Error(error.message);
  }

  if (!data) {
    return null;
  }

  return toAppUser(data as AppUserRow);
}
