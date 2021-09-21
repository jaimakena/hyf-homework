// 4. Create two functions and assign them to two different variables. One function logs out Earth,
// the other function logs out Saturn. Now create a new third function that has one parameter: planetLogFunction.
// The only thing the third function should do is call the provided parameter function.
// Try call the third function once with the Earth function and once with the Saturn function.

const earthLogger = () => {
    console.log(`Earth`);
};
const saturnLogger = () => {
    console.log(`Saturn`);
};

function planetLogFunction(callback) {
    callback();
}
planetLogFunction(earthLogger);
planetLogFunction(saturnLogger);