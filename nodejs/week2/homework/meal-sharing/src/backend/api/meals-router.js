const { response } = require("express");
const express = require("express");
const router = express.Router();

const meals = require("../data/meals.json");


router.get("/", async (request, response) => {
  try {
    if(request.query.maxPrice){
      if(isNaN(parseInt(request.query.maxPrice))){
        response.status(400).send('Please provide a valid param');
      }else{
      let mealsWithPriceFilter = meals.filter(meal => meal.price < request.query.maxPrice);
      response.send(mealsWithPriceFilter);
      }
    }  else if(request.query.title){
    let mealsWithTitle = meals.filter(meal => meal.title.includes(request.query.title));
    response.send(mealsWithTitle);
    } else if(request.query.createdAfter){
      if(isNaN(Date.parse(request.query.createdAfter))){ 
        response.status(400).send('Please provide a valid param');
      } else{
        let mealsWithCreatedDate = meals.filter(meal => {
          const createdAfterDate=new Date(request.query.createdAfter);
          const createdAtDate=new Date(meal.createdAt); 
          if(createdAtDate > createdAfterDate)
          return meal;
        })
        response.send(mealsWithCreatedDate);
      }
    } else if(request.query.limit){
      if(isNaN(parseInt(request.query.limit))){
        response.status(400).send('Please provide a valid param');
      }else{
        let mealsWithLimit = meals.slice(0, request.query.limit);
        response.send(mealsWithLimit);
      }
    }  else{
      response.send(meals);
    }

  } catch (error) {
    throw response.status(400).send(error);
  }
});

router.get("/:id", async (request, response) => {
  try {
    if(!Number.isInteger(parseFloat(request.params.id)) || Number.isNaN(parseFloat(request.params.id)))
    {
      response.status(400).send(`Id is not a number`);
    }else if (parseInt(request.params.id) > meals.length){
      response.send(`Id does not exist`);
    }else{
      let mealWithId = meals.find(meal => meal.id === parseInt(request.params.id));
      response.send(mealWithId);
    }
  } catch (error) {
    throw response.status(400).send(error); 
  }
});


module.exports = router;
