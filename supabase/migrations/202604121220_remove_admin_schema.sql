alter table public.app_users
  drop column if exists is_admin;

drop table if exists public.suspensions cascade;

drop table if exists public.app_settings cascade;
