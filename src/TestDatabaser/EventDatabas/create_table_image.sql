CREATE TABLE `IMAGE` (
    `imageId` INT NOT NULL AUTO_INCREMENT,
    `eventId` INT NOT NULL,
    `imageURL` VARCHAR(1024) NOT NULL,
    `description` TEXT,
    PRIMARY KEY (`imageId`),
    FOREIGN KEY (`eventId`) REFERENCES `EVENT`(`eventId`) ON DELETE CASCADE
);