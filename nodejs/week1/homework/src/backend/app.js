const express = require("express");
const app = express();

// import data here
const meals = require("./data/meals");
const reviews = require("./data/reviews");
const reservations = require("./data/reservations");

//Function to get meals with reviews:
function getReviewsWithMeal(){
 return meals.map(meal => {
   meal.reviews = reviews.filter(review => review.mealId === meal.id);
   return meal;
});
}
//Function to get a random meal:
function getRandomMeal() {
  const randomNumber = Math.floor((Math.random() * 4) + 1);
  return getReviewsWithMeal().find(meal => meal.id === randomNumber);
}

// this is where you will be adding your routes
app.get("/", async (request, response) => {
  response.send("Meal Sharing Web App");
});

app.get("/meals", async (request, response) => {
  response.send(getReviewsWithMeal());
});

app.get("/cheap-meals", async (request, response) => {
  response.send(getReviewsWithMeal().filter(meal => meal.price < 90));
});

app.get("/large-meals", async (request, response) => {
  response.send(getReviewsWithMeal().filter(meal => meal.maxNumberOfGuests > 5));
});

app.get("/meal", async (request, response) => {
  response.send(getRandomMeal());
});

app.get("/reservations", async (request, response) => {
  response.send(reservations);
});

app.get("/reservation", async (request, response) => {
  const randomReservation = Math.floor((Math.random() * 4) + 1);
  response.send(reservations.find(reservation => reservation.id === randomReservation));
});

module.exports = app;
