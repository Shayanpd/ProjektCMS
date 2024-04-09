CREATE TABLE t_review (
    reviewID INT AUTO_INCREMENT PRIMARY KEY,
    bookID INT NOT NULL,
    userID INT,
    rating INT CHECK (rating BETWEEN 1 AND 5), -- Constraint for rating values
    reviewText TEXT NOT NULL,
    reviewDate DATE NOT NULL,
    FOREIGN KEY (bookID) REFERENCES t_book(bookID) ON DELETE CASCADE,
    FOREIGN KEY (userID) REFERENCES t_user(userID)
);

