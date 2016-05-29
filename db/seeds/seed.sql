-- Create moves
INSERT INTO moves (title, description, gif) VALUES ('Bench press', 'Lie on a bench with a barbell on your chest. Push the weight upwards until the arms are extended.', 'https://media4.giphy.com/media/rYq49SlUrPqhy/200.gif');
INSERT INTO moves (title, description, gif) VALUES ('Squats', 'Begin standing with a barbell on your shoulder, behind the neck. Lower your knees untill you reach 90 degress, before you explode up.', 'https://media2.giphy.com/media/Ns0wHnqTsqgnu/200.gif');
INSERT INTO moves (title, description, gif) VALUES ('Military press', 'Perform a standing sholder press with barbells, press the barbell up untill the arms are fully flexed.', 'https://media0.giphy.com/media/fPIxfvLLBZZSM/200.gif');
INSERT INTO moves (title, description, gif) VALUES ('Deadlifts', 'In a standing position, bend your knees and lift a barbell from the floor. Watch your back.', 'https://media3.giphy.com/media/fiug03neLEylO/200.gif');
INSERT INTO moves (title, description, gif) VALUES ('Bent over rows', 'Stand up, bend over, then lift the barbell from the ground. Watch your back.', 'https://media0.giphy.com/media/z8ZJTu6NUM5mU/200.gif');
INSERT INTO moves (title, description, gif) VALUES ('Power cleans', 'Lift a barbell from a deadlift position, all the way up to a front squat beginning position.', 'https://media4.giphy.com/media/hi3Xpx4W4nwIg/200.gif');
INSERT INTO moves (title, description, gif) VALUES ('Chins', 'Use your guns to lift yourself up on something!', 'https://media4.giphy.com/media/mkwpc0iiC3IME/200.gif');
INSERT INTO moves (title, description, gif) VALUES ('Rowing', 'Just row, super fast on a rowing machine.', 'https://media1.giphy.com/media/1figSjF4pYLhS/200_s.gif');
INSERT INTO moves (title, description, gif) VALUES ('Jumping jacks', 'Yes its awkward, but dont care. Jump up and down with while you form a star with your legs and arms in the air.', 'https://media0.giphy.com/media/2D00I4xb5Lj8c/200.gif');
INSERT INTO moves (title, description, gif) VALUES ('Push-ups', 'Pretend you are in the army, and lift your body up from the ground.', 'https://media1.giphy.com/media/27I2x3Mgp2PSw/200.gif');
INSERT INTO moves (title, description, gif) VALUES ('Lunges', 'Like the badass Norwegian move Telemarksnedslag, place one leg in front of you to 90 degrees. Push your body up, then alternate.', 'https://media0.giphy.com/media/f7Blw3fGHGqtO/200.gif');
INSERT INTO moves (title, description, gif) VALUES ('Burpees', 'Push-up, then stand up. Like you mean it.', 'https://media1.giphy.com/media/PRqqGrAiGv4VW/200.gif');
INSERT INTO moves (title, description, gif) VALUES ('Rows', '(The weight exercise) Use a rowing machine and pull the handles against your body.', 'https://media3.giphy.com/media/7cxPLx9P2TVhS/200.gif');
INSERT INTO moves (title, description, gif) VALUES ('Jumping burpees', 'Push-ups to stand-mode to jump high AF. Fast.', 'https://media4.giphy.com/media/lEYcevSwZ55Go/200.gif');
-- INSERT INTO moves (title, description) VALUES ('');
-- INSERT INTO moves (title, description) VALUES ('');
-- INSERT INTO moves (title, description) VALUES ('');
-- INSERT INTO moves (title, description) VALUES ('');
-- INSERT INTO moves (title, description) VALUES ('');
-- INSERT INTO moves (title, description) VALUES ('');
-- INSERT INTO moves (title, description) VALUES ('');





-- nice tags: Chill, abs, body-weight, guns, doubles

-- create circuits
INSERT INTO circuits (title, tags) VALUES ('Circuit of doom', Array['base-moves', 'strength']);
INSERT INTO circuits (title, tags) VALUES ('The Meltdown', Array['base-moves', 'strength']);
INSERT INTO circuits (title, tags) VALUES ('Straight outta compton', Array['functional', 'gangsta']);
INSERT INTO circuits (title, tags) VALUES ('Fusion training circuit', Array['anaerobic', 'high-intensity']);
INSERT INTO circuits (title, tags) VALUES ('80''s jump around', Array['anaerobic', 'body-weight']);
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

INSERT INTO circuit_move (move_id, circuit_id, description) VALUES ((SELECT id FROM moves m WHERE m.title ilike 'Squats'), (SELECT id FROM circuits c WHERE c.title ilike 'Circuit of doom'), '6-8 reps');
INSERT INTO circuit_move (move_id, circuit_id, description) VALUES ((SELECT id FROM moves m WHERE m.title ilike 'Bench Press'), (SELECT id FROM circuits c WHERE c.title ilike 'Circuit of doom'), '6-8 reps');
INSERT INTO circuit_move (move_id, circuit_id, description) VALUES ((SELECT id FROM moves m WHERE m.title ilike 'Deadlifts'), (SELECT id FROM circuits c WHERE c.title ilike 'Circuit of doom'), '6-8 reps');
INSERT INTO circuit_move (move_id, circuit_id, description) VALUES ((SELECT id FROM moves m WHERE m.title ilike 'Military Press'), (SELECT id FROM circuits c WHERE c.title ilike 'Circuit of doom'), '6-8 reps');

INSERT INTO circuit_move (move_id, circuit_id) VALUES ((SELECT id FROM moves m WHERE m.title ilike 'Squats'), (SELECT id FROM circuits c WHERE c.title ilike 'The Meltdown'));
INSERT INTO circuit_move (move_id, circuit_id) VALUES ((SELECT id FROM moves m WHERE m.title ilike 'Military Press'), (SELECT id FROM circuits c WHERE c.title ilike 'The Meltdown'));
INSERT INTO circuit_move (move_id, circuit_id) VALUES ((SELECT id FROM moves m WHERE m.title ilike 'Deadlifts'), (SELECT id FROM circuits c WHERE c.title ilike 'The Meltdown'));
INSERT INTO circuit_move (move_id, circuit_id) VALUES ((SELECT id FROM moves m WHERE m.title ilike 'Rows'), (SELECT id FROM circuits c WHERE c.title ilike 'The Meltdown'));

INSERT INTO circuit_move (move_id, circuit_id) VALUES ((SELECT id FROM moves m WHERE m.title ilike 'Power cleans'), (SELECT id FROM circuits c WHERE c.title ilike 'Straight outta compton'));
INSERT INTO circuit_move (move_id, circuit_id) VALUES ((SELECT id FROM moves m WHERE m.title ilike 'Bench press'), (SELECT id FROM circuits c WHERE c.title ilike 'Straight outta compton'));
INSERT INTO circuit_move (move_id, circuit_id) VALUES ((SELECT id FROM moves m WHERE m.title ilike 'Lunges'), (SELECT id FROM circuits c WHERE c.title ilike 'Straight outta compton'));
INSERT INTO circuit_move (move_id, circuit_id) VALUES ((SELECT id FROM moves m WHERE m.title ilike 'Chins'), (SELECT id FROM circuits c WHERE c.title ilike 'Straight outta compton'));

INSERT INTO circuit_move (move_id, circuit_id, description) VALUES ((SELECT id FROM moves m WHERE m.title ilike 'Rowing'), (SELECT id FROM circuits c WHERE c.title ilike 'Fusion training circuit'), 'Rowing ergometer or a piece of equipment: 2 mins');
INSERT INTO circuit_move (move_id, circuit_id, description) VALUES ((SELECT id FROM moves m WHERE m.title ilike 'Deadlifts'), (SELECT id FROM circuits c WHERE c.title ilike 'Fusion training circuit'), '10 reps');
INSERT INTO circuit_move (move_id, circuit_id, description) VALUES ((SELECT id FROM moves m WHERE m.title ilike 'Rowing'), (SELECT id FROM circuits c WHERE c.title ilike 'Fusion training circuit'), 'Rowing ergometer or a piece of equipment: 2x2 mins');
INSERT INTO circuit_move (move_id, circuit_id, description) VALUES ((SELECT id FROM moves m WHERE m.title ilike 'Squats'), (SELECT id FROM circuits c WHERE c.title ilike 'Fusion training circuit'), '10 pres');
INSERT INTO circuit_move (move_id, circuit_id, description) VALUES ((SELECT id FROM moves m WHERE m.title ilike 'Rowing'), (SELECT id FROM circuits c WHERE c.title ilike 'Fusion training circuit'), 'Rowing ergometer or a piece of equipment: 2x2 mins');

--
INSERT INTO circuit_move (move_id, circuit_id, description) VALUES ((SELECT id FROM moves m WHERE m.title ilike 'Jumping Jacks'), (SELECT id FROM circuits c WHERE c.title ilike '80''s jump around'), '60 seconds');
INSERT INTO circuit_move (move_id, circuit_id, description) VALUES ((SELECT id FROM moves m WHERE m.title ilike 'Push-ups'), (SELECT id FROM circuits c WHERE c.title ilike '80''s jump around'), '10 reps');
INSERT INTO circuit_move (move_id, circuit_id, description) VALUES ((SELECT id FROM moves m WHERE m.title ilike 'Lunges'), (SELECT id FROM circuits c WHERE c.title ilike '80''s jump around'), '10 on each leg with dumbbells or barbell');
INSERT INTO circuit_move (move_id, circuit_id, description) VALUES ((SELECT id FROM moves m WHERE m.title ilike 'Burpees'), (SELECT id FROM circuits c WHERE c.title ilike '80''s jump around'), '10 repos');
INSERT INTO circuit_move (move_id, circuit_id, description) VALUES ((SELECT id FROM moves m WHERE m.title ilike 'Chins'), (SELECT id FROM circuits c WHERE c.title ilike '80''s jump around'), '10 reps');

--INSERT INTO circuit_move (move_id, circuit_id) VALUES ((SELECT id FROM moves m WHERE m.title = ''), SELECT id FROM circuits c WHERE c.title = '');
