-- SQLBook: Code
-- Deploy oragot:1.table to pg

BEGIN;

CREATE TABLE word (
    id int generated always as identity PRIMARY KEY,
    description text not null
);

COMMIT;

