//When will we be there??

const travelInformation = {
    speed: 50,
    destinationDistance: 432,
  };
  
  function getTravelTime(travelInformation){
    
    return Math.trunc(travelInformation.destinationDistance * 60/travelInformation.speed);
  }

  const travelTime = getTravelTime(travelInformation);
  const timeInHours = Math.floor(travelTime/60);
  const timeInMinutes = travelTime % 60;
  console.log(`Travel time: ${timeInHours} hours and ${timeInMinutes} minutes`);
