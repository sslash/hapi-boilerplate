create table IF NOT EXISTS moves (
    id serial primary key,
    title varchar(100),
    gif varchar(250),
    description text,
    created timestamptz not null default now(),
    updated timestamptz not null default now()
);
