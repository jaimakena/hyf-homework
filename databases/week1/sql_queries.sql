--Find out how many tasks are in the task table
SELECT
  count(id)
FROM
  task;

--Find out how many tasks in the task table do not have a valid due date
SELECT
  count(id)
FROM
  task
WHERE
  due_date IS NULL;

--Find all the tasks that are marked as done
SELECT
  task.title, status.name
FROM
  task
  JOIN status ON task.status_id = status.id
WHERE
  status.name LIKE 'DONE';

--Find all the tasks that are not marked as done
SELECT
  task.title, status.name
FROM
  task
  JOIN status ON task.status_id = status.id
WHERE
  status.name NOT LIKE 'DONE';

--Get all the tasks, sorted with the most recently created first
SELECT
  title, created
FROM
  task
ORDER BY
  created DESC;

--Get the single most recently created task
SELECT
  title, created
FROM
  task
ORDER BY
  created DESC
LIMIT
  1;

--Get the title and due date of all tasks where the title or description contains database
SELECT
  title,
  due_date
FROM
  task
WHERE
  title LIKE '%database%'
  OR description LIKE '%database%';

--Get the title and status (as text) of all tasks
SELECT
  task.title,
  status.name
FROM
  task
  JOIN status ON task.status_id = status.id;

--Get the name of each status, along with a count of how many tasks have that status
SELECT
  status.name,
  count(task.title)
FROM
  task
  JOIN status ON task.status_id = status.id
GROUP BY
  status.id;

--Get the names of all statuses, sorted by the status with most tasks first
SELECT
  status.name,
  count(task.title) as total
FROM
  task
  JOIN status ON task.status_id = status.id
GROUP BY
  status.id
ORDER BY
  total desc;