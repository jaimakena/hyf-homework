--Part 4: Creating a database
  CREATE database business_db;
USE business_db;
SET NAMES utf8mb4;
CREATE Table `employees`(
    `emp_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `first_name` VARCHAR(255) NOT NULL,
    `last_name` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `phone` VARCHAR(255) NULL
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
CREATE Table `titles`(
    `emp_id` int(10) NOT NULL,
    `title` VARCHAR(255) NOT NULL,
    `from_date` DATE,
    `to_date` DATE
  ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

CREATE Table `departments`(
    `dept_id` int(10) NOT NULL PRIMARY KEY,
    `dept_name` VARCHAR(255) NOT NULL,
    `location_id` int(10) NOT NULL,
    CONSTRAINT `fk_locations` FOREIGN KEY (`location_id`) REFERENCES `locations`(`location_id`) ON DELETE CASCADE ON UPDATE CASCADE
  ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;
CREATE Table `dept_emp`(
    `emp_id` int(10) UNSIGNED NOT NULL, 
    `dept_id` int(10) NOT NULL,
    PRIMARY KEY(`emp_id`,`dept_id`),
    CONSTRAINT `fk_dept_emp_employees` FOREIGN KEY (`emp_id`) REFERENCES `employees` (`emp_id`) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT `fk_dept_emp_departments` FOREIGN KEY (`dept_id`) REFERENCES `departments` (`dept_id`) ON DELETE CASCADE ON UPDATE CASCADE
  ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;
CREATE Table `locations`(
    `location_id` int(10) NOT NULL PRIMARY KEY,
    `address` VARCHAR(255) NOT NULL,
    `post_code` VARCHAR(255) NULL,
    `city` VARCHAR(255) NULL
  ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;