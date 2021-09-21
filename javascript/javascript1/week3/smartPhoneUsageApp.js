//Smart-Phone Usage app:
//Adding an activity
const activities = [];
const limit = 150;

function addActivity(dateParam = todayDate.toLocaleDateString(), activityParam, durationParam)
{
  let newActivityFlag = true;
 for(let i=0; i < activities.length; i++)
 {
   if(activities[i].activity === activityParam && activities[i].date === dateParam)
   {
     activities[i].duration += durationParam;
     newActivityFlag = false;
   }
 }
 if(newActivityFlag)
 {
  activities.push({date: dateParam, activity: activityParam, duration: durationParam})
 }
}

addActivity('5/17/2021', 'Youtube', 30);
console.log(activities);

function showStatus(activities)
{
    let sumOfDuration = 0;
  if(activities.length === 0)
  {
    return`Add some activities before calling showStatus`;
  }
    const todayDate = new Date();
    const dateString = todayDate.toLocaleDateString();
    let noOfActivities = 0;
  for(let i = 0; i < activities.length; i++)
  { 
    if(activities[i].date === dateString)
    {
    sumOfDuration = sumOfDuration + activities[i].duration;
    noOfActivities += 1;
    }
  }
  if(sumOfDuration > limit)
  {
    return `You have reached your limit, no more smartphoning for you!`;
  }
    return `You have added ${noOfActivities} activities. They amount to ${sumOfDuration} min. of usage.`;
}

function addActivitySmart(activity, duration)
{
  const todayDate = new Date();
  const date = todayDate.toLocaleDateString();
  return addActivity(date, activity, duration);  
}

function getMostTime(dateParam, activityParam, durationParam)
{
  let maxDuration = 0;
  for(let i=0; i < activities.length; i++)
  {
    if(activities[i].duration>maxDuration)
    {
    maxDuration = activities[i].duration;
    }
  }
  return maxDuration;
}

addActivity('5/18/2021', 'Facebook', 42);
addActivity('5/18/2021', 'Facebook', 43);
addActivitySmart('Instagram', 35);
console.log(activities);
console.log(showStatus(activities));
console.log(getMostTime(activities));