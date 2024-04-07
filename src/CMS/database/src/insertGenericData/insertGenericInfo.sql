INSERT INTO t_author (authorID, name, dateOfBirth) VALUES
(1, 'John Doe', '1990-05-15'),
(2, 'Jane Smith', '1985-09-28'),
(3, 'Alice Johnson', '1998-02-10');

INSERT INTO t_genre (genreID, genreName) VALUES
(1, 'Mystery'),
(2, 'Science Fiction'),
(3, 'Romance'),
(4, 'Fantasy'),
(5, 'Thriller'),
(6, 'Historical Fiction'),
(7, 'Horror');

INSERT INTO t_book (bookID, isbn, title, dateOfRelease, description) VALUES
(1, '1234567890', 'The Mystery Book', '2023-01-01', 'A thrilling mystery story.'),
(2, '2345678901', 'The Sci-Fi Adventure', '2023-02-15', 'An epic science fiction journey.'),
(3, '3456789012', 'Romantic Dreams', '2023-03-30', 'A heartwarming romantic tale.');

INSERT INTO t_book_author (authorID, bookID) VALUES
(1, 1),
(2, 2),
(3, 3);

INSERT INTO t_book_genre (bookID, genreID) VALUES
(1, 1),
(2, 2),
(3, 3);

INSERT INTO t_user (userID, ssn, name, password, email) VALUES
(1, 111111111, 'User1', 'password1', 'user1@example.com'),
(2, 222222222, 'User2', 'password2', 'user2@example.com'),
(3, 333333333, 'User3', 'password3', 'user3@example.com');

INSERT INTO t_review (reviewID, bookID, userID, rating, reviewText, reviewDate) VALUES
(1, 1, 1, 4, 'Enjoyed the mystery book a lot!', '2023-04-10'),
(2, 2, 2, 5, 'Amazing sci-fi adventure, couldn\'t put it down!', '2023-04-12'),
(3, 3, 3, 3, 'Liked the romantic story, but expected more.', '2023-04-15');
