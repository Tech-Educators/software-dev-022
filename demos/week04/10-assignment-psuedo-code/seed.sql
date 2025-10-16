-- I'm not using this file to run any code 
-- Please put a copy of what you did in the sql editor on supabase in here

create table messages (
    id INT PRIMARY KEY GENERATED ALWAYS AS IDENTETIY,
    author text,
    message text,
    profile_picture text
)

INSERT INTO messages (author, message) VALUES ('Sam', 'It is cold!')