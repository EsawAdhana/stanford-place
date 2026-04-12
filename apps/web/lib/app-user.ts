import type { AppUser } from "@stanfordplace/shared";

import { getSupabaseAdmin } from "./supabase/admin";

type AppUserRow = {
  id: string;
  google_sub: string;
  email: string;
  display_name: string | null;
  image_url: string | null;
  is_admin: boolean;
  next_place_at: string | null;
};

function normalizeEmail(email: string) {
  return email.trim().toLowerCase();
}

function shouldBootstrapAdmin(email: string) {
  const adminEmail = process.env.ADMIN_EMAIL;

  if (!adminEmail) {
    return false;
  }

  return normalizeEmail(adminEmail) === normalizeEmail(email);
}

function toAppUser(row: AppUserRow): AppUser {
  return {
    id: row.id,
    email: row.email,
    displayName: row.display_name,
    image: row.image_url,
    isAdmin: row.is_admin,
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
    .select("id, google_sub, email, display_name, image_url, is_admin, next_place_at")
    .single();

  if (error || !data) {
    throw new Error(error?.message ?? "Failed to upsert Stanford user.");
  }

  let userRow = data as AppUserRow;

  if (shouldBootstrapAdmin(userRow.email) && !userRow.is_admin) {
    const { data: promotedUser, error: promotionError } = await supabase
      .from("app_users")
      .update({ is_admin: true })
      .eq("id", userRow.id)
      .select("id, google_sub, email, display_name, image_url, is_admin, next_place_at")
      .single();

    if (promotionError || !promotedUser) {
      throw new Error(promotionError?.message ?? "Failed to promote bootstrap admin.");
    }

    userRow = promotedUser as AppUserRow;
  }

  return toAppUser(userRow);
}

export async function getAppUserById(id: string) {
  const supabase = getSupabaseAdmin();
  const { data, error } = await supabase
    .from("app_users")
    .select("id, google_sub, email, display_name, image_url, is_admin, next_place_at")
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
