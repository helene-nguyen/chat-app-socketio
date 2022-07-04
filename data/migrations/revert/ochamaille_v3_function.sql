-- SQLBook: Code
-- Revert ochamaille_sqitch:ochamaille_v3_function from pg

BEGIN;

 DROP FUNCTION checkWord(t text);

COMMIT;
