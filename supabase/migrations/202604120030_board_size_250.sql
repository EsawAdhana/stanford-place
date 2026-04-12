alter table public.placements
  drop constraint if exists placements_x_check,
  drop constraint if exists placements_y_check;

alter table public.current_pixels
  drop constraint if exists current_pixels_x_check,
  drop constraint if exists current_pixels_y_check;

alter table public.placements
  add constraint placements_x_check check (x >= 0 and x < 250) not valid,
  add constraint placements_y_check check (y >= 0 and y < 250) not valid;

alter table public.current_pixels
  add constraint current_pixels_x_check check (x >= 0 and x < 250) not valid,
  add constraint current_pixels_y_check check (y >= 0 and y < 250) not valid;
