create or replace function public.place_pixel(
  p_user_id uuid,
  p_x integer,
  p_y integer,
  p_color integer,
  p_ip_hash text default null,
  p_user_agent_hash text default null
)
returns table (
  x integer,
  y integer,
  color integer,
  user_id uuid,
  updated_at timestamptz,
  next_place_at timestamptz
)
language plpgsql
security definer
set search_path = public
as $$
declare
  locked_user public.app_users%rowtype;
  current_setting public.app_settings%rowtype;
  active_suspension public.suspensions%rowtype;
  placed_at_value timestamptz := now();
  next_place_value timestamptz := placed_at_value + interval '1 minute';
begin
  if auth.uid() is distinct from p_user_id then
    raise exception 'authenticated user does not match placement user';
  end if;

  select *
    into current_setting
    from public.app_settings
   where id = true;

  if coalesce(current_setting.read_only, false) then
    raise exception 'board is read-only';
  end if;

  select *
    into locked_user
    from public.app_users
   where id = p_user_id
   for update;

  if not found then
    raise exception 'user not found';
  end if;

  if locked_user.next_place_at is not null and locked_user.next_place_at > placed_at_value then
    raise exception 'cooldown active';
  end if;

  select *
    into active_suspension
    from public.suspensions as s
   where s.user_id = p_user_id
     and s.revoked_at is null
     and s.starts_at <= placed_at_value
     and (s.expires_at is null or s.expires_at > placed_at_value)
   order by s.starts_at desc
   limit 1;

  if found then
    raise exception 'user suspended';
  end if;

  insert into public.placements (
    user_id,
    x,
    y,
    color,
    placed_at,
    ip_hash,
    user_agent_hash
  )
  values (
    p_user_id,
    p_x,
    p_y,
    p_color,
    placed_at_value,
    p_ip_hash,
    p_user_agent_hash
  );

  insert into public.current_pixels (
    x,
    y,
    color,
    updated_at,
    updated_by
  )
  values (
    p_x,
    p_y,
    p_color,
    placed_at_value,
    p_user_id
  )
  on conflict on constraint current_pixels_pkey do update
    set color = excluded.color,
        updated_at = excluded.updated_at,
        updated_by = excluded.updated_by;

  update public.app_users
     set next_place_at = next_place_value,
         last_seen_at = placed_at_value
   where id = p_user_id;

  return query
  select
    p_x,
    p_y,
    p_color,
    p_user_id,
    placed_at_value,
    next_place_value;
end;
$$;

revoke all on function public.place_pixel(uuid, integer, integer, integer, text, text) from public;
grant execute on function public.place_pixel(uuid, integer, integer, integer, text, text) to authenticated;
