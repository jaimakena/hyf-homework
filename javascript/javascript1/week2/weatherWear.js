//Weather Wear

function createWeatherWear(temp)
{
  if (temp <= 0)
  {
    return 'Wear winter jacket and thick boots';
  } else if (temp < 10)
  {
    return 'Wear jacket and boots';
  } else if (temp < 20)
  {
    return 'Wear sweatshirt and jeans';
  } else if (temp < 30)
  {
    return 'Wear t-shirt and sneakers';
  } else if (temp > 30)
  {
    return 'Wear t-shirt and shorts';
  } else
  {
    return 'Wear appropriate clothing';
  } 
}
const clothesToWear1 = createWeatherWear(0);
const clothesToWear2 = createWeatherWear(10);
const clothesToWear3 = createWeatherWear(23);
const clothesToWear4 = createWeatherWear(33);
const clothesToWear5 = createWeatherWear(45);


console.log(clothesToWear1);
console.log(clothesToWear2);
console.log(clothesToWear3);
console.log(clothesToWear4);
console.log(clothesToWear5);