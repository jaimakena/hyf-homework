//Find shortest word
const danishWords = ["bil", "plante", "kaffe", "bog", "ø", "planetarium"];
function findShortestWord(danishWords)
{
    let shortestWordLen = danishWords[0].length;
    let shortestWordIndex = 0;

    for(let i = 0; i < danishWords.length; i++)
    {
        if(danishWords[i].length < shortestWordLen)
        {
            shortestWordLen = danishWords[i].length;
            shortestWordIndex=i;
        } 
    }
    console.log(danishWords[shortestWordIndex]);
}

findShortestWord(danishWords); // returns 'ø'
