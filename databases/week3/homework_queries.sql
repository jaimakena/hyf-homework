--Meal Queries:
--Get all meals
SELECT * FROM meal;
--Add a new meal
INSERT INTO meal(`id`, `title`, `description`, `location`, `when`, `max_reservations`, `price`, `created_date`)
VALUES(5, 'Bread', 'Garlic Bread', 'Amager', '2021-08-05 12:00:00', 6, 60.30, '2021-07-01 09:00:00');
--Get a meal with any id, fx 1
SELECT * FROM meal WHERE id = 3;
--Update a meal with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE meal SET title = 'Waffles', description = 'Nutella & Banana', location = 'Vesterbro' WHERE id = 5;

--Delete a meal with any id, fx 1
DELETE FROM meal WHERE id = 5;

--Reservation Queries:
--Get all reservations
SELECT * FROM reservation;
--Add a new reservation
INSERT INTO reservation(`id`, `number_of_guests`, `meal_id`, `created_date`, `contact_phonenumber`, `contact_name`, `contact_email`)
VALUES(5, 4, 2, '2021-07-01 09:00:00', '212-403-2676', 'Meghan', 'meghan@gmail.com');
--Get a reservation with any id, fx 1
SELECT * FROM reservation WHERE id = 2;
--Update a reservation with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE reservation
SET number_of_guests = 5 WHERE id = 5;
--Delete a reservation with any id, fx 1
DELETE FROM reservation WHERE id = 5;

--Review Queries:
--Get all reviews
SELECT * FROM review;
--Add a new review

INSERT INTO review(`id`, `title`, `description`, `meal_id`, `stars`, `created_date`)
VALUES(5, 'Bad', 'Food does not taste good at all', 4, 1, '2021-07-01 09:00:00');

--Get a review with any id, fx 1
SELECT * FROM review WHERE id = 1;

--Update a review with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE review
SET title = 'Very Bad', stars = 0
WHERE id = 5;

--Delete a review with any id, fx 1
DELETE FROM review WHERE id = 5;

--Additional Queries:
--Now add a couple of different meals, reservations and reviews with different attributes. With those meals create the following queries
INSERT INTO meal(`id`, `title`, `description`, `location`, `when`, `max_reservations`, `price`, `created_date`)
VALUES(5, 'Rød grød', 'Rød grød med fløde', 'Amager', '2021-08-05 12:00:00', 6, 101.10, '2021-06-01 09:00:00'),
(6, 'Smør Brød', 'Brød med rejer', 'Vesterbro', '2021-08-06 10:00:00', 4, 90.05, '2021-06-05 10:00:00');

INSERT INTO reservation(`id`, `number_of_guests`, `meal_id`, `created_date`, `contact_phonenumber`, `contact_name`, `contact_email`)
VALUES(5, 4, 2, '2021-07-01 09:00:00', '212-403-2676', 'Meghan', 'meghan@gmail.com'),
(6, 4, 5, '2021-06-01 09:00:00', '212-546-5637', 'William', 'william@gmail.com');

INSERT INTO review(`id`, `title`, `description`, `meal_id`, `stars`, `created_date`)
VALUES(5, 'Average', 'Food tastes ok', 4, 3, '2021-07-01 09:00:00'),
(6, 'Good', 'Tastes good', 6, 4, '2021-06-05 10:00:00');

--Get meals that has a price smaller than a specific price fx 90
SELECT title, price  FROM meal WHERE price < 120;

--Get meals that still has available reservations
SELECT meal.title, meal.max_reservations, reservation.number_of_guests FROM meal JOIN reservation ON meal.id = reservation.meal_id 
WHERE reservation.number_of_guests < meal.max_reservations;

--Get meals that partially match a title. Rød grød med will match the meal with the title Rød grød med fløde
SELECT * FROM meal WHERE title LIKE '%brød%';

--Get meals that has been created between two dates
SELECT * FROM meal 
WHERE created_date BETWEEN '2021-06-01 09:00:00' AND '2021-08-01 09:00:00';

--Get only specific number of meals fx return only 5 meals
SELECT * FROM meal LIMIT 4;

--Get the meals that have good reviews
SELECT meal.title AS meal_name, review.title AS review, review.description, review.stars 
FROM meal 
JOIN review
ON meal.id = review.meal_id
WHERE review.stars > 3;

--Get reservations for a specific meal sorted by created_date
SELECT meal.title, meal.created_date, reservation.contact_name FROM meal JOIN reservation ON meal.id = reservation.meal_id WHERE meal.id = 2
ORDER BY created_date;

--Sort all meals by average number of stars in the reviews
SELECT meal.title, AVG(review.stars) as average FROM meal JOIN review ON meal.id = review.meal_id
GROUP BY meal.id
ORDER BY average DESC;