//Series duration of my life

const seriesDurations = [
    {
      title: "Game of thrones",
      days: 7,
      hours: 9,
      minutes: 10,
    },
    {
      title: "Modern Family",
      days: 4,
      hours: 8,
      minutes: 9,
    },
    {
      title: "Friends",
      days: 11,
      hours: 11,
      minutes: 30,
    },
  ];

function logOutSeriesText(seriesDurations){
    const daysOfAvgLife = 80 * 365;
    let totalTime = 0;
    for(let i = 0; i < seriesDurations.length; i++)
    {
    let daysSeries = seriesDurations[i].days + seriesDurations[i].hours/24 + seriesDurations[i].minutes/1440;
    let percentOfSeries = daysSeries/daysOfAvgLife * 100; 
    console.log(`${seriesDurations[i].title} took ${percentOfSeries.toFixed(2)}% of my life.`);
    totalTime = totalTime + percentOfSeries;
    }
    return `\n In total that is ${totalTime.toFixed(2)}% of my life.`;
}

console.log(logOutSeriesText(seriesDurations));

