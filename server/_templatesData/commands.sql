SELECT * FROM dbTABLE
-- for get ALL reqeuest
SELECT * FROM dbTABLE WHERE dbCOLUMN = $1
-- for get one request 
INSERT INTO dbTABLE(id, ATTR1, ATTR2) VALUES($1, $2, $3)
-- for post requests
UPDATE dbTable SET COL1 = $1, COL2 = $2 WHERE id = $3
-- for put/patch requests
DELETE FROM dbTable WHERE id = $1
-- for delete requests
