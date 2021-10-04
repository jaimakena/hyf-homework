--Part 2: School database
  --Create a new database containing the following tables:
  --Class: with the columns: id, name, begins (date), ends (date)
  --Student: with the columns: id, name, email, phone, class_id (foreign key)
SET NAMES utf8mb4;
CREATE database school_db;
USE school_db;
CREATE Table `class`(
    `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(255) NOT NULL,
    `begins(date)` DATE,
    `ends(date)` DATE
  ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;
select
  *
from
  class;
CREATE Table `student`(
    `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `phone` VARCHAR(255) NULL,
    `class_id` int(10) UNSIGNED,
    CONSTRAINT `fk_class` FOREIGN KEY (`class_id`) REFERENCES `class`(`id`) ON DELETE CASCADE ON UPDATE CASCADE
  ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;
--Create an index on the name column of the student table.
  CREATE index idx_name ON student(name);
SHOW INDEX
FROM
  student;
--Add a new column to the class table named status which can only have the following values: not-started, ongoing, finished (hint: enumerations).
  USE school_db;
ALTER table
  class
ADD
  COLUMN `status` enum('not-started', 'ongoing', 'finished') NOT NULL;