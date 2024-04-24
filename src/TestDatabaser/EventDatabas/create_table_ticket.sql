CREATE TABLE `TICKET` (
    `ticketId` INT NOT NULL AUTO_INCREMENT,
    `bookingId` INT NOT NULL,
    `ticketCode` VARCHAR(255) NOT NULL,
    `seat` VARCHAR(255),
    PRIMARY KEY (`ticketId`),
    FOREIGN KEY (`bookingId`) REFERENCES `BOOKING`(`bookingId`) ON DELETE CASCADE
);
