//Create an array with 3 items. All items should be functions.
//Iterate through the array and call all the functions.
const add = (a, b) => {
    return a + b;
}
const subtract = (a, b) => {
    return a - b;
}
const multiply = (a, b) => {
    return a * b;
}
const arrayOfFunctions = [add, subtract, multiply];

arrayOfFunctions.forEach(element => {
    console.log(element(4, 5));
});

//Create a function as a const and try creating a function normally. Call both functions.
const firstFunction = () => {
    console.log(`This is not a named function`);
};
function secondFunction(){
    console.log(`This is a named function`);
}

firstFunction();
secondFunction();

//Create an object that has a key whose value is a function. Try calling this function.
const object = {Id: 1, Name: function (){
    console.log(`This is a function in the object`);
}};

object.Name();