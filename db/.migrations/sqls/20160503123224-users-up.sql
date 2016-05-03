create table IF NOT EXISTS users (
    id serial primary key,
    email varchar(64) unique not null,
    hash varchar(100),
    created timestamptz not null default now(),
    updated timestamptz not null default now()
);
