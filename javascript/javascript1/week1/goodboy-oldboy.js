//Goodboy-Oldboy
const dogYearOfBirth = 2017;
const dogYearFuture = 2027;
var dogYear = dogYearFuture - dogYearOfBirth;
{
let shouldShowResultInDogYears = false;
console.log('Your dog will be ' + dogYear + ' human years old in ' + dogYearFuture);
}
{
let shouldShowResultInDogYears = true;
var dogYear = dogYear * 7;
console.log('Your dog will be ' + dogYear + ' years old in ' + dogYearFuture);
}