//Smart-Phone Usage app:
//Adding an activity
let activities = [];
const limit = 110;

function addActivity(date, activity, duration)
{
  if(!date){
    let todayDate = new Date();
    date = todayDate.toLocaleDateString();
  }
  return activities.push({date: date, activity: activity, duration: duration})
}

addActivity('5/17/2021', 'Youtube', 30);
console.log(activities);

function showStatus(activities){
  let sumOfDuration = 0;
  if(activities.length === 0){
    console.log('Add some activities before calling showStatus');
  }
  for(let i = 0; i < activities.length; i++){ 
    sumOfDuration = sumOfDuration + activities[i].duration;
  }
  if(sumOfDuration > limit){
    return `You have reached your limit, no more smartphoning for you!`;
  }
  return `You have added ${activities.length} activities. They amount to ${sumOfDuration} min. of usage.`;
}

function addActivitySmart(activity, duration)
{
  let todayDate = new Date();
  date = todayDate.toLocaleDateString();
  return addActivity(date, activity, duration);  
}

addActivity('5/18/2021', 'Facebook', 42);
addActivitySmart('Instagram', 35);
console.log(activities);
console.log(showStatus(activities));