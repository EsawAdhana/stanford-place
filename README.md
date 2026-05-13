# stanford-place

A Stanford-only `250 x 250` collaborative canvas inspired by r/place.

## Overview

Users sign in with Stanford Google Workspace, place one pixel every minute, and watch the board update live through Supabase Realtime. The placement endpoint is gated by a transactional Postgres function so concurrent placements stay consistent and the per-user cooldown is enforced server-side.

## Stack

- `apps/web` — Next.js frontend, Auth.js Google auth with server-side Stanford-domain verification, route handlers
- `packages/shared` — shared board constants, validation schemas, API types
- `supabase/migrations` — Postgres schema, RLS policies, and the `place_pixel` SQL function

## Getting started

```bash
cp apps/web/.env.example apps/web/.env.local
npm install
npm run dev
```

Before the first run, create a Supabase project, apply all SQL files in `supabase/migrations/` in timestamp order, and confirm Realtime is enabled for `current_pixels`, `placements`, and `app_users`. Create a Google OAuth client with the callback URL `http://localhost:3000/api/auth/callback/google`, then fill in `apps/web/.env.local`:

```bash
AUTH_SECRET=
AUTH_GOOGLE_ID=
AUTH_GOOGLE_SECRET=
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
SUPABASE_JWT_SECRET=
```

## Notable endpoints

- `GET /api/board/me` — current app user and cooldown state
- `GET /api/board/snapshot` — board metadata and recent placements
- `GET /api/board/tiles?tileX=0&tileY=0` — visible tile fetch
- `POST /api/board/place` — transactional placement via `place_pixel`
- `GET /api/supabase/token` — short-lived JWT for browser Realtime

## Status

Active.
