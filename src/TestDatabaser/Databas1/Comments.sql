CREATE TABLE Comments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    content TEXT NOT NULL,
    publishedDate DATETIME NOT NULL,
    articleId INT,
    parentId INT NULL,
    FOREIGN KEY (articleId) REFERENCES Articles(id),
    FOREIGN KEY (parentId) REFERENCES Comments(id)
);
