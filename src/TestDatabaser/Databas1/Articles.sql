CREATE TABLE Articles (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    publishedDate DATETIME NOT NULL,
    authorId INT,
    FOREIGN KEY (authorId) REFERENCES Authors(id)
);
