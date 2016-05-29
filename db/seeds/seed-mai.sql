INSERT INTO moves (title, description, gif) VALUES ('Decline abs crunch', 'Crunches on a decline bench. Add some weights if you are badass', 'http://i.giphy.com/z20gsVu88igfK.gif');
INSERT INTO moves (title, description, gif) VALUES ('Side-plank', '', 'http://i.giphy.com/z20gsVu88igfK.gif');
INSERT INTO moves (title, description, gif) VALUES ('Side-crunches', '', 'http://i.giphy.com/z20gsVu88igfK.gif');
INSERT INTO moves (title, description, gif) VALUES ('Leg raises', '', 'http://i.giphy.com/z20gsVu88igfK.gif');

-- INSERT INTO moves (title, description) VALUES ('');
-- INSERT INTO moves (title, description) VALUES ('');
-- INSERT INTO moves (title, description) VALUES ('');
-- INSERT INTO moves (title, description) VALUES ('');
-- INSERT INTO moves (title, description) VALUES ('');
-- INSERT INTO moves (title, description) VALUES ('');
-- INSERT INTO moves (title, description) VALUES ('');





-- nice tags: Chill, abs, body-weight, guns, doubles

-- create circuits
INSERT INTO circuits (title, tags) VALUES ('Ab killer', Array['abs', 'chill', 'body-weight']);
-- INSERT INTO circuits (title) VALUES ('');
-- INSERT INTO circuits (title) VALUES ('');
-- INSERT INTO circuits (title) VALUES ('');
-- INSERT INTO circuits (title) VALUES ('');
-- INSERT INTO circuits (title) VALUES ('');
-- INSERT INTO circuits (title) VALUES ('');
-- INSERT INTO circuits (title) VALUES ('');
-- INSERT INTO circuits (title) VALUES ('');
-- INSERT INTO circuits (title) VALUES ('');
-- INSERT INTO circuits (title) VALUES ('');



-- create circuit moves

INSERT INTO circuit_move (move_id, circuit_id, description) VALUES ((SELECT id FROM moves m WHERE m.title ilike 'Decline abs crunch'), (SELECT id FROM circuits c WHERE c.title ilike 'Ab killer'), '12-15 reps');
INSERT INTO circuit_move (move_id, circuit_id, description) VALUES ((SELECT id FROM moves m WHERE m.title ilike 'Side-plank'), (SELECT id FROM circuits c WHERE c.title ilike 'Ab killer'), '30 seconds on each side');
INSERT INTO circuit_move (move_id, circuit_id, description) VALUES ((SELECT id FROM moves m WHERE m.title ilike 'Side-crunches'), (SELECT id FROM circuits c WHERE c.title ilike 'Ab killer'), '16 reps');
INSERT INTO circuit_move (move_id, circuit_id, description) VALUES ((SELECT id FROM moves m WHERE m.title ilike 'Leg raises'), (SELECT id FROM circuits c WHERE c.title ilike 'Ab killer'), '12 reps');
