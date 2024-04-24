CREATE TABLE `EVENT` (
    `eventId` INT NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(255) NOT NULL,
    `description` TEXT,
    `location` VARCHAR(255),
    PRIMARY KEY (`eventId`)
);