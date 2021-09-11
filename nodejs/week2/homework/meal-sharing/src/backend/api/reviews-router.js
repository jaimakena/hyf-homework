const { response } = require("express");
const express = require("express");
const router = express.Router();

const reviews = require("../data/reviews.json");

router.get("/", async (request, response) => {
    try {
      response.send(reviews);
    } catch (error) {
      throw error;
    }
});

router.get("/:id", async (request, response) => {
    try {
      if(!Number.isInteger(parseFloat(request.params.id)) || Number.isNaN(parseFloat(request.params.id)))
      {
        response.status(400).send(`Id is not a number`);
      }else if (parseInt(request.params.id) > reviews.length){
        response.send(`Id does not exist`);
      }else{
        let reviewsWithId = reviews.find(review => review.id === parseInt(request.params.id));
        response.send(reviewsWithId);
      }
    } catch (error) {
      throw response.status(400).send(error); 
    }
});

module.exports = router;