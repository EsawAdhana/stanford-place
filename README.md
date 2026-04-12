# StanfordPlace

StanfordPlace is a Stanford-only `250 x 250` collaborative canvas inspired by r/place. Users sign in with Stanford Google Workspace, place one pixel every minute, and watch live updates through Supabase Realtime.

## Stack

- `apps/web`: Next.js frontend, Auth.js Google auth, server-side Stanford-domain verification, and route handlers.
- `packages/shared`: Shared board constants, validation schemas, and API types.
- `supabase/migrations`: Postgres schema, policies, and the transactional `place_pixel` SQL function.

## Local Setup

1. Copy `apps/web/.env.example` to `apps/web/.env.local`.
2. Create a Supabase project.
3. Apply all SQL files in `supabase/migrations` in timestamp order.
4. In Supabase, confirm Realtime is enabled for `current_pixels`, `placements`, and `app_users`.
5. Create a Google OAuth client with the callback URL `http://localhost:3000/api/auth/callback/google`.
6. Fill in `apps/web/.env.local`:

```bash
AUTH_SECRET=replace-me
AUTH_GOOGLE_ID=replace-me
AUTH_GOOGLE_SECRET=replace-me
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=replace-me
SUPABASE_SERVICE_ROLE_KEY=replace-me
SUPABASE_JWT_SECRET=replace-me
```

7. Start the app:

```bash
npm run dev
```

The app runs on `http://localhost:3000`. There is no separate API or Redis process.

## Vercel Launch

1. Create the Vercel project with the repository root as the project root.
2. Keep the install command as `npm ci`.
3. Keep the build command as `npm run build`.
4. Add these production environment variables in Vercel:
   - `AUTH_SECRET`
   - `AUTH_GOOGLE_ID`
   - `AUTH_GOOGLE_SECRET`
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY`
   - `SUPABASE_JWT_SECRET`
5. Add the production Google OAuth callback URL: `https://<your-domain>/api/auth/callback/google`.
6. Deploy a preview build first and verify Stanford sign-in, pixel placement, and Realtime before promoting to production.

## Notable Endpoints

- `GET /api/board/me`: Current app user and cooldown state.
- `GET /api/board/snapshot`: Board metadata and recent placements.
- `GET /api/board/tiles?tileX=0&tileY=0`: Visible tile fetch backed by Supabase.
- `POST /api/board/place`: Transactional placement via the `place_pixel` SQL function.
- `GET /api/supabase/token`: Mint a short-lived Supabase JWT for browser Realtime access.

## Operational Notes

- Stanford-only login is enforced by verifying the Google ID token server-side and requiring `hd = stanford.edu`.
- `placements` is append-only. `current_pixels` stores the latest visible board state.
- Cooldown enforcement lives in Supabase Postgres inside `place_pixel(...)`, not in client code.
- `place_pixel(...)` is executed by the server with the Supabase service-role key after NextAuth has resolved the current Stanford user.
- Browser Realtime subscriptions use a short-lived custom Supabase JWT minted from the Next session.
# StanfordPlace
