--Part 1: Working with tasks
--Add a task with these attributes: title, description, created, updated, due_date, status_id, user_id
INSERT INTO
  task(
    title,
    description,
    created,
    updated,
    due_date,
    status_id,
    user_id
  )
VALUES(
    'Homework',
    'Complete this week homework',
    NOW(),
    NOW(),
    '2021-08-05''10:01:25',
    1,
    1
  );
--Change the title of a task
UPDATE
  task
SET
  title = 'Complete Homework'
WHERE
  id = 36;
--Change a task due date
UPDATE
  task
SET
  due_date = '2021-08-06''13:01:25'
WHERE
  id = 36;
--Change a task status
UPDATE
  task
SET
  status_id = 2
WHERE
  id = 36;
--Mark a task as complete
UPDATE
  task
SET
  status_id = 3
WHERE
  id = 36;
--Delete a task
DELETE FROM
  task
WHERE
  id = 36;
--Part 2: School database
  --Create a new database containing the following tables:
  --Class: with the columns: id, name, begins (date), ends (date)
  --Student: with the columns: id, name, email, phone, class_id (foreign key)
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
--Part 3: More queries
  --You should do these queries on the database hyf_lesson2, which we created last class.
  --Get all the tasks assigned to users whose email ends in @spotify.com
SELECT
  user_id,
  task_id,
  title,
  user.email
FROM
  user_task
  JOIN task ON task_id = task.id
  JOIN user ON user_id = user.id
WHERE
  user.email LIKE '%@spotify.com';
--Get all the tasks for 'Donald Duck' with status 'Not started'
SELECT
  task.title,
  user.name AS user_name,
  status.name AS status_name
FROM
  task
  RIGHT JOIN status ON task.status_id = status.id
  RIGHT JOIN user_task ON task.id = task_id
  JOIN user ON user_task.user_id = user.id
WHERE
  user.name = 'Donald Duck'
  and status.name = 'Not started';
--Get all the tasks for 'Maryrose Meadows' that were created in september (hint: month(created)=month_number)
SELECT
  task.title,
  user.name AS user_name,
  task.created
FROM
  task
  JOIN user_task ON task.id = task_id
  JOIN user ON user_task.user_id = user.id
WHERE
  user.name = 'Maryrose Meadows'
  and month(created) = 9;
--Find how many tasks where created in each month, e.g. how many tasks were created in october, how many tasks were created in november, etc. (hint: use group by)
SELECT
  count(*),
  month(created)
FROM
  task
GROUP BY
  month(created);
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