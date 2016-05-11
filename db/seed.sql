-- Create moves
INSERT INTO moves (title, description) VALUES ('Bench press');
INSERT INTO moves (title, description) VALUES ('Squats');
INSERT INTO moves (title, description) VALUES ('Military Press');
INSERT INTO moves (title, description) VALUES ('Deadlifts');
INSERT INTO moves (title, description) VALUES ('Bent over rows');
INSERT INTO moves (title, description) VALUES ('Power cleans');
INSERT INTO moves (title, description) VALUES ('Lunges');
INSERT INTO moves (title, description) VALUES ('Chins');
INSERT INTO moves (title, description) VALUES ('Rowing');
INSERT INTO moves (title, description) VALUES ('Jumping Jacks');
INSERT INTO moves (title, description) VALUES ('Push-ups');
INSERT INTO moves (title, description) VALUES ('Lunges');
INSERT INTO moves (title, description) VALUES ('Burpees');
INSERT INTO moves (title, description) VALUES ('');
INSERT INTO moves (title, description) VALUES ('');
INSERT INTO moves (title, description) VALUES ('');
INSERT INTO moves (title, description) VALUES ('');
INSERT INTO moves (title, description) VALUES ('');
INSERT INTO moves (title, description) VALUES ('');
INSERT INTO moves (title, description) VALUES ('');






-- create circuits
INSERT INTO circuits (title) VALUES ('Circuit of doom');
INSERT INTO circuits (title) VALUES ('The Meltdown');
INSERT INTO circuits (title) VALUES ('Straight outta compton');
INSERT INTO circuits (title) VALUES ('Fusion training circuit');
INSERT INTO circuits (title) VALUES ('80''s jump around');
INSERT INTO circuits (title) VALUES ('');
INSERT INTO circuits (title) VALUES ('');
INSERT INTO circuits (title) VALUES ('');
INSERT INTO circuits (title) VALUES ('');
INSERT INTO circuits (title) VALUES ('');
INSERT INTO circuits (title) VALUES ('');
INSERT INTO circuits (title) VALUES ('');
INSERT INTO circuits (title) VALUES ('');
INSERT INTO circuits (title) VALUES ('');
INSERT INTO circuits (title) VALUES ('');



-- create circuit moves
INSERT INTO circuit_move (move_id, circuit_id) VALUES ((SELECT id FROM moves m WHERE m.title = ''), SELECT id FROM circuits c WHERE c.title = '');

INSERT INTO circuit_move (move_id, circuit_id) VALUES ((SELECT id FROM moves m WHERE m.title = 'Squats'), SELECT id FROM circuits c WHERE c.title = 'The Meltdown');
INSERT INTO circuit_move (move_id, circuit_id) VALUES ((SELECT id FROM moves m WHERE m.title = 'Military Press'), SELECT id FROM circuits c WHERE c.title = 'The Meltdown');
INSERT INTO circuit_move (move_id, circuit_id) VALUES ((SELECT id FROM moves m WHERE m.title = 'Deadlifts'), SELECT id FROM circuits c WHERE c.title = 'The Meltdown');
INSERT INTO circuit_move (move_id, circuit_id) VALUES ((SELECT id FROM moves m WHERE m.title = 'Rows'), SELECT id FROM circuits c WHERE c.title = 'The Meltdown');

INSERT INTO circuit_move (move_id, circuit_id) VALUES ((SELECT id FROM moves m WHERE m.title = 'Power cleans'), SELECT id FROM circuits c WHERE c.title = 'Straight outta compton');
INSERT INTO circuit_move (move_id, circuit_id) VALUES ((SELECT id FROM moves m WHERE m.title = 'Bench press'), SELECT id FROM circuits c WHERE c.title = 'Straight outta compton');
INSERT INTO circuit_move (move_id, circuit_id) VALUES ((SELECT id FROM moves m WHERE m.title = 'Lunges'), SELECT id FROM circuits c WHERE c.title = 'Straight outta compton');
INSERT INTO circuit_move (move_id, circuit_id) VALUES ((SELECT id FROM moves m WHERE m.title = 'Chins'), SELECT id FROM circuits c WHERE c.title = 'Straight outta compton');

INSERT INTO circuit_move (move_id, circuit_id, description) VALUES ((SELECT id FROM moves m WHERE m.title = 'Rowing'), SELECT id FROM circuits c WHERE c.title = 'Fusion training circuit', 'Rowing ergometer or a piece of equipment: 2 mins');
INSERT INTO circuit_move (move_id, circuit_id, description) VALUES ((SELECT id FROM moves m WHERE m.title = 'Deadlifts'), SELECT id FROM circuits c WHERE c.title = 'Fusion training circuit', '10 reps');
INSERT INTO circuit_move (move_id, circuit_id, description) VALUES ((SELECT id FROM moves m WHERE m.title = 'Rowing'), SELECT id FROM circuits c WHERE c.title = 'Fusion training circuit', 'Rowing ergometer or a piece of equipment: 2x2 mins');
INSERT INTO circuit_move (move_id, circuit_id, description) VALUES ((SELECT id FROM moves m WHERE m.title = 'Squats'), SELECT id FROM circuits c WHERE c.title = 'Fusion training circuit', '10 pres');
INSERT INTO circuit_move (move_id, circuit_id, description) VALUES ((SELECT id FROM moves m WHERE m.title = 'Rowing'), SELECT id FROM circuits c WHERE c.title = 'Fusion training circuit', 'Rowing ergometer or a piece of equipment: 2x2 mins');

--
INSERT INTO circuit_move (move_id, circuit_id, description) VALUES ((SELECT id FROM moves m WHERE m.title = 'Jumping Jacks'), SELECT id FROM circuits c WHERE c.title = '80''s jump around', '60 seconds');
INSERT INTO circuit_move (move_id, circuit_id, description) VALUES ((SELECT id FROM moves m WHERE m.title = 'Push-ups'), SELECT id FROM circuits c WHERE c.title = '80''s jump around', '10 reps');
INSERT INTO circuit_move (move_id, circuit_id, description) VALUES ((SELECT id FROM moves m WHERE m.title = 'Lunges'), SELECT id FROM circuits c WHERE c.title = '80''s jump around', '10 on each leg with dumbbells or barbell');
INSERT INTO circuit_move (move_id, circuit_id, description) VALUES ((SELECT id FROM moves m WHERE m.title = 'Burpees'), SELECT id FROM circuits c WHERE c.title = '80''s jump around', '10');
INSERT INTO circuit_move (move_id, circuit_id, description) VALUES ((SELECT id FROM moves m WHERE m.title = 'Chine'), SELECT id FROM circuits c WHERE c.title = '80''s jump around', '10');
