//When will we be there??

const travelInformation = {
  speed: 50,
  destinationDistance: 432,
};

function getTravelTime(travelInformation){
  
  const travelTime = Math.trunc(travelInformation.destinationDistance * 60/travelInformation.speed);
  const timeInHours = Math.floor(travelTime/60);
  const timeInMinutes = travelTime % 60;
  return `Travel time: ${timeInHours} hours and ${timeInMinutes} minutes`;
}

console.log(getTravelTime(travelInformation));
