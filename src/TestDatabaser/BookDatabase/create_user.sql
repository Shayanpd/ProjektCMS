CREATE USER 'user'@'localhost' IDENTIFIED BY 'user';
GRANT SELECT, INSERT, UPDATE ON book_database.* TO 'user'@'localhost';
