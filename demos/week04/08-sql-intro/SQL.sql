-- Lets make a table

CREATE TABLE jokes (
  id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  joke TEXT,
  punchline TEXT
);

-- PRIMARY KEY - A unique identifier for a record in your table. All tables *** should have a primary key. It means if we duplicate data for primary key the database will error (which we want to happen)
-- GENERATED ALWAYS - SQL will generate unique ID numbers for us. 

-- Insert into tablename (column1, column2)
INSERT INTO jokes (joke, punchline) VALUES ('Why did the scarecrow win an award?', 'Because he was outstanding in his field.')


-- INserting multiple things
INSERT INTO jokes (joke, punchline) VALUES
('Why don’t skeletons fight each other?', 'They don’t have the guts.'),
('Why did the JavaScript developer go broke?', 'Because he kept using var when he should’ve used let.'),
('What’s a computer’s favorite beatle song?', '“Help!” – every time the user opens Task Manager.'),
('Why do cows wear bells?', 'Because their horns don’t work.'),
('Why don’t eggs tell jokes?', 'They’d crack each other up.'),
('Why did the tomato blush?', 'Because it saw the salad dressing.'),
('What did the zero say to the eight?', 'Nice belt!'),
('Why did the golfer bring two pairs of pants?', 'In case he got a hole in one.'),
('What’s orange and sounds like a parrot?', 'A carrot.'),
('Why did the bicycle fall over?', 'It was two-tired.'),
('Why don’t scientists trust atoms?', 'Because they make up everything.'),
('Why do bees have sticky hair?', 'Because they use honeycombs.'),
('What do you call fake spaghetti?', 'An impasta.'),
('Why did the math book look sad?', 'It had too many problems.'),
('Why can’t your nose be 12 inches long?', 'Because then it would be a foot.'),
('What do you call cheese that isn’t yours?', 'Nacho cheese.'),
('Why don’t some couples go to the gym?', 'Because some relationships don’t work out.'),
('How does the moon cut its hair?', 'Eclipse it.'),
('What kind of music do mummies listen to?', 'Wrap music.');

-- we can only use single quotes in sql


-- SELECTING DATA FROM OUR TABLE

SELECT * FROM jokes

-- FILTER OR SORT BY SOME AMOUNT - alphabetically on the joke

SELECT * FROM jokes ORDER BY joke asc

-- LIMIT the amount of results we get

SELECT * FROM jokes LIMIT 5;

-- COUNT how many jokes are in the table

SELECT COUNT(*) FROM jokes;

-- SELECT A specific joke by its id

SELECT * FROM jokes WHERE id = 1;

-- SELECT Specific columsn

SELECT joke from jokes

-- Select only the joke and id from a particular joke

SELECT joke, id FROM jokes WHERE id = 1;

-- Look for any jokes that have the string 'cows' in them somwhere
SELECT * FROM Jokes WHERE joke ILIKE '%cows%'