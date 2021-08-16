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
  due_date = '2021-08-16''13:01:25'
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
  JOIN status ON task.status_id = status.id
  JOIN user_task ON task.id = task_id
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
  month(created) AS MonthCreated 
FROM
  task
GROUP BY
  MonthCreated;
