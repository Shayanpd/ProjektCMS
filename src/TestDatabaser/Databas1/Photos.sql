CREATE TABLE Photos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    photoURL VARCHAR(255) NOT NULL,
    caption TEXT,
    articleId INT,
    FOREIGN KEY (articleId) REFERENCES Articles(id)
);
