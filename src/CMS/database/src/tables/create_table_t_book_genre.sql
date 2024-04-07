CREATE TABLE t_book_genre(
    bookID INT,
    genreID INT,
    FOREIGN KEY (bookID) REFERENCES t_book(bookID) ON DELETE CASCADE,
    FOREIGN KEY (genreID) REFERENCES t_genre(genreID),
    PRIMARY KEY (bookID, genreID)
);