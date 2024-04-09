CREATE TABLE t_book_author(
    authorID INT,
    bookID INT,
    FOREIGN KEY (authorID) REFERENCES t_author(authorID),
    FOREIGN KEY (bookID) REFERENCES t_book(bookID) ON DELETE CASCADE,
    PRIMARY KEY (authorID, bookID)
);
