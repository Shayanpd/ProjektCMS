CREATE TABLE t_user(
    userID INT PRIMARY KEY AUTO_INCREMENT,
    ssn VARCHAR(10) NOT NULL,
    name VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(255)
);
