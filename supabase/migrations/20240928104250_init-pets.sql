CREATE TABLE public.sailboat_sensor_data (
  id bigint generated always as identity not null,
  timestamp timestamp with time zone null default now(),
  latitude double precision not null,
  longitude double precision not null,
  wind_speed double precision null,
  wind_direction double precision null,
  boat_speed double precision null,
  heading double precision null,
  battery_level double precision null,
  photo_url text null,
  constraint sailboat_sensor_data_pkey primary key (id)
) TABLESPACE pg_default;
