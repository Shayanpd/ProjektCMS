CREATE TABLE Article_Tag (
    articleId INT,
    tagId INT,
    PRIMARY KEY (articleId, tagId),
    FOREIGN KEY (articleId) REFERENCES Articles(id),
    FOREIGN KEY (tagId) REFERENCES Tags(id)
);
