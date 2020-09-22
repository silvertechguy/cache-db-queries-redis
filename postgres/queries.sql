BEGIN;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE posts(
  id SERIAL PRIMARY KEY,
  body VARCHAR NOT NULL,
  created_at TIMESTAMP DEFAULT NOW() NOT NULL
);

INSERT INTO posts (body) VALUES ('First post'), ('Second post'), ('Third post'), ('Fourth post'), ('Fivth post'), ('Sixth post'), ('seventh post');

COMMIT;