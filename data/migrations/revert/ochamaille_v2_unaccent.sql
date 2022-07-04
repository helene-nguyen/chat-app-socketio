-- SQLBook: Code
-- Revert ochamaille_sqitch:ochamaille_v2_unaccent from pg

BEGIN;

DROP EXTENSION IF EXISTS "unaccent";

COMMIT;
