CREATE TABLE `BOOKING` (
    `bookingId` INT NOT NULL AUTO_INCREMENT,
    `userId` INT NOT NULL,
    `eventId` INT NOT NULL,
    `bookingDate` DATETIME NOT NULL,
    `quantity` INT NOT NULL,
    `status` ENUM('confirmed', 'cancelled') NOT NULL,
    PRIMARY KEY (`bookingId`),
    FOREIGN KEY (`userId`) REFERENCES `USER`(`userId`) ON DELETE CASCADE,
    FOREIGN KEY (`eventId`) REFERENCES `EVENT`(`eventId`) ON DELETE CASCADE
);