//Housey-Pricey
let volumeInMeters;
let gardenSizeInM2;
let additionalCost;
let originalCost;
let housePrice = (volumeInMeters * 2.5 * 1000) + (gardenSizeInM2 * 300);
//Peter housePrice
{
    let volumeInMeters = 8 * 10 * 10;
    let gardenSizeInM2 = 100;
    let originalCost = 2500000;
    let housePrice = (volumeInMeters * 2.5 * 1000) + (gardenSizeInM2 * 300);
    let additionalCost = originalCost - housePrice;
    console.log(originalCost < housePrice);
    console.log('Peter will be paying an additional cost of ' + additionalCost + ' on the house');
}
//Julia
{
    let volumeInMeters = 5 * 11 * 8;
    let gardenSizeInM2 = 70;
    let originalCost = 1000000;
    let housePrice = (volumeInMeters * 2.5 * 1000) + (gardenSizeInM2 * 300);
    let additionalCost = housePrice - originalCost;
    console.log(originalCost < housePrice);
    console.log('Julia will be paying lesser cost of ' + additionalCost + ' than the estimated price on the house');
}