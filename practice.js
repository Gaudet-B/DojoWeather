function weekDay() {
    let date = new Date();
    // console.log(day);
    // return day;
    let daysOfWeek = [];
    daysOfWeek[0] = "Sunday";
    daysOfWeek[1] = "Monday";
    daysOfWeek[2] = "Tuesday";
    daysOfWeek[3] = "Wednesday";
    daysOfWeek[4] = "Thursday";
    daysOfWeek[5] = "Friday";
    daysOfWeek[6] = "Saturday";
    // console.log(daysOfWeek);
    let day = daysOfWeek[date.getDay()];
    return day;
}

console.log(weekDay());