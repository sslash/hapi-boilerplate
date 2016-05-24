create table IF NOT EXISTS circuits (
    id serial primary key,
    title varchar(100),
    description text,
    tags text[],
    created timestamptz not null default now(),
    updated timestamptz not null default now()
);
