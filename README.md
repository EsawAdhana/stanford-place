# stanford-place

A Stanford-only 250x250 collaborative canvas, inspired by r/place. Sign in with Stanford Google Workspace, place one pixel every minute, and watch the board update live through Supabase Realtime. Concurrent placements go through a transactional Postgres function so the per-user cooldown is enforced server-side.

## Stack

npm workspaces with two packages and a Supabase backend.

- `apps/web` — Next.js frontend, Auth.js Google auth with server-side Stanford-domain verification, route handlers.
- `packages/shared` — shared board constants, validation schemas, API types.
- `supabase/migrations` — Postgres schema, RLS policies, and the `place_pixel` SQL function.

## Setup

```bash
cp apps/web/.env.example apps/web/.env.local
npm install
npm run dev
```

Before running for the first time, create a Supabase project, apply every SQL file in `supabase/migrations/` in order, and enable Realtime for `current_pixels`, `placements`, and `app_users`. Create a Google OAuth client with the callback `http://localhost:3000/api/auth/callback/google`, then fill in `apps/web/.env.local` with the seven `AUTH_*` and `*SUPABASE*` values listed in `.env.example`.

## Endpoints worth knowing

- `GET /api/board/me` — current user and cooldown state
- `GET /api/board/snapshot` — board metadata and recent placements
- `GET /api/board/tiles?tileX=0&tileY=0` — fetch a visible tile
- `POST /api/board/place` — transactional placement via `place_pixel`
- `GET /api/supabase/token` — short-lived JWT for browser Realtime
