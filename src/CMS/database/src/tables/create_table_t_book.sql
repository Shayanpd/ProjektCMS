CREATE TABLE t_book (
    bookID INT AUTO_INCREMENT PRIMARY KEY,
    isbn VARCHAR(255) NOT NULL,
    title VARCHAR(255) NOT NULL,
    dateOfRelease DATE NOT NULL,
    #grade INT NOT NULL, #behövs???
    description TEXT NOT NULL,
    rating INT CHECK (rating BETWEEN 1 AND 5)
);
