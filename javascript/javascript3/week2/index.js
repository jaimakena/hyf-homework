//Movies exercise
/* fetch(`https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json`)
.then((res) => res.json())
.then((data) => {
    //console.log(data);
    data.forEach(movie => {
        console.log(movie);
        const badMovies = [];
        if(movie.rating < 5 && movie.year >= 2000){
            badMovies.push(movie)
            badMovies.forEach(badMovie =>{
                console.log(`Title: ${badMovie.title}, Rating: ${badMovie.rating}, Year: ${badMovie.year}`);
            })   
        }
    });
}) */
const body = document.querySelector('body');
async function getBadMovies(){
    const response = await fetch(`https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json`);
    const movieData = await response.json();
    const badMovies = [];
    const h2 = document.createElement('h2');
    movieData.map((movie) => {
        if(movie.rating < 5 && movie.year > 2000){
            badMovies.push(movie);
        }
    })
    h2.innerHTML = `There are ${badMovies.length} Bad Movies in the list`;
    body.appendChild(h2); 
    badMovies.map(badMovie =>{
        const ul = document.createElement('ul');
        const li = document.createElement('li');
        ul.innerHTML = `Title: ${badMovie.title}`;
        li.innerHTML = `Rating: ${badMovie.rating}, Year: ${badMovie.year}`;   
        body.appendChild(ul); 
        ul.appendChild(li); 
    })     
}
getBadMovies();

//Promise that resolves after set time

function callPromiseAfterTime(resolveAfter){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Promise Resolved after ${resolveAfter} seconds`);
        }, resolveAfter * 1000)
    })
}

async function renderPromise(resolveAfter){
    const response = await callPromiseAfterTime(resolveAfter);
    console.log(response);
}
renderPromise(5);

//Rewrite time
//Rewrite setTimeout and navigator.geolocation.getCurrentPosition to promises. 
//The getCurrentPosition function is probably going to throw an error, but that is fine. 
//As long as you can use it as a promise.

function setTimeoutPromise(timeparam){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Promise resolved after ${timeparam/1000} seconds`);
        }, timeparam);
    })
}
async function renderSetTimeoutPromise(time){
    const response = await setTimeoutPromise(time);
    console.log(response);
}
renderSetTimeoutPromise(3000);


function geoLocation(){
    const geoLocationPromise = new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
            position => {resolve(position.coords)},
            error => {reject(error)}
        )
    })
    return geoLocationPromise;   
}
/*   geoLocation()
  .then((position) => {
      console.log(position);
  })
  .catch((error) => {
      console.log(error);
  }) */

async function getCurrentLocation(){
   try {
    const position = await geoLocation();
    console.log(position);
   } 
   catch (error) {
       console.log(error);
   } 
}
getCurrentLocation(); 

//Fetching and waiting 
//Do the 3 steps below using promises and .then.
//Do the 3 steps below using async/await

function getAstronautData(){
    fetch(`http://api.open-notify.org/astros.json`)
    .then((res) => res.json())
    .then((data) => console.log(data))
}
getAstronautData();

async function fetchAstronautData(){
    const response = await fetch(`http://api.open-notify.org/astros.json`);
    const data = await response.json();
    console.log(data);
}
fetchAstronautData();

//Which way do you prefer, the promise way or the async/await way?
//I think both the ways are easy to understand and both of them take similar number of lines of code.
//But async await makes the code more synchronous and does not use callbacks which makes it much easier to understand.



