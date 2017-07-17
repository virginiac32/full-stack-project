# Schema

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## tracks
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
text        | text      | not null
artist      | string    | not null
user_id     | integer   | not null, foreign key, indexed
link        | string    |
year        | string    |
type        | string    | not null

## annotations
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users), indexed
track_id    | integer   | not null, foreign key, indexed
body        | string    | not null
start_idx   | integer   | not null
end_idx     | integer   | not null
total_score | integer   | not null

## comments
column name   | data type | details
--------------|-----------|-----------------------
id            | integer   | not null, primary key
body          | text      | not null
user_id       | integer   | not null
annotation_id | integer   | not null
total_score   | integer   | not null

## votes
column name   | data type | details
--------------|-----------|-----------------------
id            | integer   | not null, primary key
user_id       | integer   | not null, foreign key
annotation_id | integer   | foreign key
comment_id    | integer   | foreign key
value         | integer   | not null
