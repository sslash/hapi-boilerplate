create table IF NOT EXISTS circuit_move (
    circuit_id int references circuits(id),
    move_id int references moves(id),
    description text,
    created timestamptz not null default now(),
    updated timestamptz not null default now()
);
