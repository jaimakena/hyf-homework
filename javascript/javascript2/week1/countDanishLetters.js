//Find and count the Danish Letters
function findDanishLetters(stringParam)
{
   const stringSplit = stringParam.split('');
   let count_å = 0;
   let count_æ = 0;
   let count_ø = 0;
   
   for(let i = 0; i < stringSplit.length; i++)
   {
    if(stringSplit[i] === 'å'){ count_å ++;}
    else if(stringSplit[i] === 'æ'){ count_æ ++;}
    else if(stringSplit[i] === 'ø'){ count_ø ++;} 
   }
   let Total = count_å + count_æ + count_ø;
   console.log(`{Total: ${Total}${(count_å > 0)?(', å:'+' '+ count_å):''}${(count_ø > 0)?(', ø:'+' '+count_ø):''}${(count_æ > 0)?(', æ:'+' '+count_æ):''}}`);
}

const danishString = "Jeg har en blå bil";
const danishString2 = "Blå grød med røde bær";
findDanishLetters(danishString); // returns {total: 1, å: 1}
findDanishLetters(danishString2);// returns {total: 4, æ: 1, ø: 2, å: 1}