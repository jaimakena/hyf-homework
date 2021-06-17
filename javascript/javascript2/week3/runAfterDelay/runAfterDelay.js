//7. Create a function called runAfterDelay. It has two parameters: delay and callback. 
//When called the function should wait delay seconds and then call the provided callback function. 
//Try and call this function with different delays and different callback functions

function runAfterDelay(delay, callback){
    setTimeout(() => {
        callback();
    }, delay * 1000);
}

runAfterDelay(2, () => {
console.log('Should be logged after 2 seconds');
});
runAfterDelay(6, () => {
    console.log('Should be logged after 6 seconds');
});