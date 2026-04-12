# Vercel Launch Checklist

## Project Settings

1. Import the repository into Vercel.
2. Keep the project root at the repository root.
3. Use `npm ci` as the install command.
4. Use `npm run build` as the build command.

## Environment Variables

Set these in Vercel for Preview and Production:

- `AUTH_SECRET`
- `AUTH_GOOGLE_ID`
- `AUTH_GOOGLE_SECRET`
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`
- `SUPABASE_JWT_SECRET`

## Google OAuth

- Add `https://<your-domain>/api/auth/callback/google` as an authorized redirect URI.
- Remove stale localhost-only callback settings before production sign-in testing.

## Supabase

1. Apply all files in `supabase/migrations` in timestamp order.
2. Confirm the latest migration redefining `place_pixel(...)` has been applied.
3. Verify Realtime is enabled for `current_pixels`, `placements`, and `app_users`.

## Production Verification

1. Sign in with a Stanford Google Workspace account.
2. Place a pixel and confirm the returned cooldown is 1 minute.
3. Confirm Realtime updates arrive in the board UI.
