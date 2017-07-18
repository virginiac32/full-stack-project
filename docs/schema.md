# Schema

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## artwork
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
description | text      |
artist      | string    | not null
user_id     | integer   | not null, foreign key, indexed
link        | string    | not null
year        | string    |

## annotations
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key, indexed
artwork_id  | integer   | not null, foreign key, indexed
body        | string    | not null
x_pos       | integer   | not null
y_pos       | integer   | not null
total_score | integer   | not null

## comments
column name   | data type | details
--------------|-----------|-----------------------
id            | integer   | not null, primary key
body          | text      | not null
user_id       | integer   | not null, foreign key, indexed
artwork_id    | integer   | not null, foreign key, indexed
total_score   | integer   | not null

## votes
column name   | data type | details
--------------|-----------|-----------------------
id            | integer   | not null, primary key
user_id       | integer   | not null, foreign key, indexed
annotation_id | integer   | foreign key
comment_id    | integer   | foreign key
value         | integer   | not null
