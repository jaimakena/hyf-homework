const { response } = require("express");
const express = require("express");
const router = express.Router();

const reservations = require("../data/reservations.json");

router.get("/", async (request, response) => {
    try {
      response.send(reservations);
    } catch (error) {
      throw error;
    }
});

router.get("/:id", async (request, response) => {
    try {
      if(!Number.isInteger(parseFloat(request.params.id)) || Number.isNaN(parseFloat(request.params.id)))
      {
        response.status(400).send(`Id is not a number`);
      }else if (parseInt(request.params.id) > reservations.length){
        response.send(`Id does not exist`);
      }else{
        let reservationWithId = reservations.find(reservation => reservation.id === parseInt(request.params.id));
        response.send(reservationWithId);
      }
    } catch (error) {
      throw response.status(400).send(error); 
    }
});

module.exports = router;