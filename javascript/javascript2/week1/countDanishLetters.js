//Find and count the Danish Letters
function findDanishLetters(stringParam)
{
   const stringSplit = stringParam.split('');
   const counter = {å:0, æ:0, ø:0};
   
stringSplit.forEach(danishWord => {
if(!isNaN(counter[danishWord])){
   counter[danishWord] += 1;
}
});
console.log(counter);
}

const danishString = "Jeg har en blå bil";
const danishString2 = "Blå grød med røde bær";
findDanishLetters(danishString);
findDanishLetters(danishString2);