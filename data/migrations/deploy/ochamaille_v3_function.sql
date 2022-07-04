-- SQLBook: Code
-- Deploy oragot:3.function to pg

BEGIN;

CREATE FUNCTION checkWord(t text) 
RETURNS TABLE (result boolean) AS $$

BEGIN

RETURN QUERY
(SELECT COUNT(id)>0 FROM word
WHERE unaccent(description) ~* unaccent(t)
AND LENGTH(description) = LENGTH(t));

END

$$ LANGUAGE plpgsql;

COMMIT;

