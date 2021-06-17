//9. Create a function called jokeCreator that has three parameters:
//shouldTellFunnyJoke - boolean, logFunnyJoke - function and logBadJoke - function. 
//If you set shouldTellFunnyJoke to true it should call the logFunnyJoke function 
//that should log out a funny joke. And vice versa.

const joke = document.getElementById('joke');

function jokeCreator(shouldTellFunnyJoke, logFunnyJoke, logBadJoke){
    if(shouldTellFunnyJoke){
        return logFunnyJoke();
    }else{
        return logBadJoke();
    }
}
const logFunnyJoke = () => {
    return (`Why was the Easter bunny so upset? He was having a bad hare day`);
};
const logBadJoke = () => {
   return (`What do you call an alligator in a vest? An in-vest-igator`);
};

joke.innerHTML = jokeCreator(false, logFunnyJoke, logBadJoke);
joke.innerHTML = jokeCreator(true, logFunnyJoke, logBadJoke);