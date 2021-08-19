SET NAMES utf8mb4;
CREATE DATABASE meal_db;
USE meal_db;
CREATE TABLE `meal` (
  `id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `title` VARCHAR(255) NOT NULL,
  `description` TEXT NULL DEFAULT NULL,
  `location` varchar(255) NOT NULL,
  `when` DATETIME NOT NULL,
  `max_reservations` INT(10) UNSIGNED NOT NULL,
  `price` DECIMAL(5,2) UNSIGNED NOT NULL,
  `created_date` DATETIME NOT NULL DEFAULT NOW()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `reservation` (
  `id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `number_of_guests` INT(10) UNSIGNED NOT NULL,
  `meal_id` INT(10) UNSIGNED NOT NULL,
  `created_date` DATETIME NOT NULL DEFAULT NOW(),
  `contact_phonenumber` VARCHAR(255) NOT NULL,
  `contact_name` VARCHAR(255) NOT NULL,
  `contact_email` VARCHAR(255) NOT NULL,
  CONSTRAINT `fk_reservation_meal` FOREIGN KEY (`meal_id`) REFERENCES `meal` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `review` (
  `id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `title` VARCHAR(255) NOT NULL,
  `description` TEXT NULL DEFAULT NULL,
  `meal_id` INT(10) UNSIGNED NOT NULL,
  `stars` INT(10) NOT NULL,
  `created_date` DATETIME NOT NULL DEFAULT NOW(),
  CONSTRAINT `fk_review_meal` FOREIGN KEY (`meal_id`) REFERENCES `meal` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--Insert values into meal table:
INSERT INTO meal(`id`, `title`, `description`, `location`, `when`, `max_reservations`, `price`, `created_date`)
VALUES(1, 'Pasta', 'Spaghetti Bolognese', 'Copenhagen', '2021-08-01 11:00:00', 10, 120.50, '2021-07-01 09:00:00'),
(2, 'Pasta', 'Lasagna', 'Amager', '2021-08-02 10:00:00', 8, 125.50, '2021-07-01 09:00:00'),
(3, 'Pizza', 'BBQ Chicken', 'Østerport', '2021-08-03 13:00:00', 5, 115.50, '2021-07-01 09:00:00'),
(4, 'Pizza', 'Vegetarian', 'Vesterport', '2021-08-04 12:00:00', 6, 110.20, '2021-07-01 09:00:00');

--Insert values into reservation table:
INSERT INTO reservation(`id`, `number_of_guests`, `meal_id`, `created_date`, `contact_phonenumber`, `contact_name`, `contact_email`)
VALUES(1, 4, 3, '2021-07-01 09:00:00', '212-453-2746', 'Kate', 'kate.m@gmail.com'),
(2, 5, 4, '2021-07-01 09:00:00', '212-465-7645', 'Hulk', 'hulk@gmail.com'),
(3, 6, 2, '2021-07-01 09:00:00', '212-235-0892', 'Thor', 'thor@gmail.com'),
(4, 8, 1,'2021-07-01 09:00:00', '212-089-6754', 'Black Panther', 'panther.b@gmail.com');

--Insert values into review table:

INSERT INTO review(`id`, `title`, `description`, `meal_id`, `stars`, `created_date`)
VALUES(1, 'Good', 'Spaghetti tastes really good', 1, 4, '2021-07-01 09:00:00'),
(2, 'Very Good', 'It is the best option for vegetarians', 4, 4, '2021-07-01 09:00:00'),
(3, 'Excellent', 'The lasagna tasted awesome', 2, 5, '2021-07-01 09:00:00'),
(4, 'Average', 'The chicken on the pizza was average and it was a little spicy', 3, 2, '2021-07-01 09:00:00');