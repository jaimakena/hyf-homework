//Housey-Pricey
let volumeInMeters, gardenSizeInM2, additionalCost, originalCost, housePrice;

//Peter housePrice

    volumeInMeters = 8 * 10 * 10;
    gardenSizeInM2 = 100;
    originalCost = 2500000;
    housePrice = (volumeInMeters * 2.5 * 1000) + (gardenSizeInM2 * 300);
    additionalCost = originalCost - housePrice;
    if(originalCost < housePrice){
        console.log(`Peter is paying a lesser amount of ${additionalCost} on the house`);
    }else{
        console.log(`Peter will be paying an additional cost of ${additionalCost} on the house`);
    }
    

//Julia

    volumeInMeters = 5 * 11 * 8;
    gardenSizeInM2 = 70;
    originalCost = 1000000;
    housePrice = (volumeInMeters * 2.5 * 1000) + (gardenSizeInM2 * 300);
    additionalCost = housePrice - originalCost;
    if(originalCost < housePrice){
        console.log(`Julia will be paying lesser amount of ${additionalCost} than the estimated price on the house`);
    }else{
        console.log(`Julia is paying an additional cost of ${additionalCost} on the house`);
    }
    
