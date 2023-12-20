DROP DATABASE imagedb;
CREATE DATABASE IF NOT EXISTS imagedb;
USE imagedb;
SHOW TABLES;
DROP TABLE images;
SELECT * FROM images;

select image from images where id='1f2b285c-598a-480e-a3da-c242bbd56445';
SELECT CONVERT(image USING utf8) FROM images;
