function getWeekDay(addDays){
    dayArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let todayDate = new Date();
    let dayNum = todayDate.getDay();
    let eventWeekDay = (dayNum + addDays) % 7;
    return dayArray[eventWeekDay];
}
console.log(getWeekDay(9));
console.log(getWeekDay(7));