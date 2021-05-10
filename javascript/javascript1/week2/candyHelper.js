let boughtCandyPrices = [];
let boughtCandy = [];
let amountToSpend = Math.random() * 100;

function addCandy(candyType, weight){
    if(candyType === 'Sweet'){
        candyPrice = 0.5 * weight;
    }else if(candyType === 'Chocolate'){
        candyPrice = 0.7 * weight;
    }else if(candyType === 'Toffee'){
        candyPrice = 1.1 * weight;
    }else if(candyType === 'Chewing-gum'){
        candyPrice = 0.03 * weight;
    }
    boughtCandyPrices.push(candyPrice);
    boughtCandy.push(candyType);
}

function canBuyMoreCandy(){
  let numberOfItems = boughtCandyPrices.length;
  let amountSpent = 0;
for(i = 0; i < numberOfItems; i++){
    amountSpent = amountSpent + boughtCandyPrices[i];
}
console.log("Amount spent already:"+ amountSpent);
return amountToSpend > amountSpent;
}

console.log("Amount to spend:"+ amountToSpend);
addCandy('Sweet', 20);
addCandy('Chocolate', 20);
addCandy('Toffee', 20);
addCandy('Chewing-gum', 20);
if(canBuyMoreCandy()){
    console.log("You can buy more, so please do!");
}else{
    console.log("Enough candy for you!");
}
