-- just an example of the DB structure

CREATE TABLE IF NOT EXISTS week8_blog_posts (
    id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
);

-- one to many
CREATE TABLE IF NOT EXISTS week8_blog_comments (
    id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    post_id REFERENCES week8_blog_posts(id),
    username VARCHAR(30),
    comment TEXT
)

CREATE TABLE IF NOT EXISTS week8_blog_tags (
    id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY, 
    name VARCHAR(255) NOT NULL
)

-- many to many 
CREATE TABLE IF NOT EXISTS week8_blog_tags_posts (
    id INT PRIMARY KEY GENERATES ALWAYS AS IDENTITY,
    tag_id REFERENCES week8_blog_tags(id),
    post_id REFERENCES week8_blog_posts
)