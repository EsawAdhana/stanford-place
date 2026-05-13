# stanford-place

A Stanford-only 250x250 collaborative canvas, inspired by r/place. Sign in with Stanford Google Workspace, place one pixel every minute, and watch the board update live through Supabase Realtime. Concurrent placements go through a transactional Postgres function so the per-user cooldown is enforced server-side.

## Stack

npm workspaces with two packages and a Supabase backend.

- `apps/web` — Next.js frontend, Auth.js Google auth with server-side Stanford-domain verification, route handlers.
- `packages/shared` — shared board constants, validation schemas, API types.
- `supabase/migrations` — Postgres schema, RLS policies, and the `place_pixel` SQL function.

## Endpoints worth knowing

- `GET /api/board/me` — current user and cooldown state
- `GET /api/board/snapshot` — board metadata and recent placements
- `GET /api/board/tiles?tileX=0&tileY=0` — fetch a visible tile
- `POST /api/board/place` — transactional placement via `place_pixel`
- `GET /api/supabase/token` — short-lived JWT for browser Realtime
