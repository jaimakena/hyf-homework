const express = require("express");
const router = express.Router();

const movies = require("../data/movies.json");
let filteredMovies;
router.get("/", async (request, response) => {
  if(request.query.minRating){
    filteredMovies = movies.filter(movie => movie.year >= request.query.beginYear && movie.year <= request.query.endYear && movie.rating >= request.query.minRating );
    response.send({ data: filteredMovies });
  } else if(request.query.beginYear){
    filteredMovies = movies.filter(movie => movie.year >= request.query.beginYear && movie.year <= request.query.endYear);
    response.send({data: filteredMovies});
  }else {
    response.send({data: movies});
  }
  console.log(filteredMovies.length);
});

router.get("/:id", async (request, response) => {
  
  const movie = movies.filter(m => m.id == request.params.id);
  response.send({ data: movie });
});


module.exports = router;
