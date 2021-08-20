console.log("Great success!");

async function dayOfWeek() {
    let date = new Date();
    let day = date.getDay();
    // console.log(day);
    let daysOfWeek = [];
    daysOfWeek[0] = "Sunday";
    daysOfWeek[1] = "Monday";
    daysOfWeek[2] = "Tuesday";
    daysOfWeek[3] = "Wednesday";
    daysOfWeek[4] = "Thursday";
    daysOfWeek[5] = "Friday";
    daysOfWeek[6] = "Saturday";
    // console.log(daysOfWeek);
    // let now = daysOfWeek[day];
    // console.log(now);
    let twoDaysOutDay = document.getElementById("two_days_out_label");
    let threeDaysOutDay = document.getElementById("three_days_out_label");
    if (day > 4) {
        twoDaysOutDay.innerText = daysOfWeek[day - 5];
        threeDaysOutDay.innerText = daysOfWeek[day - 4];
        // console.log(twoDaysOutDay.innerText);
        // console.log(threeDaysOutDay.innerText);
    }
    else if (day = 4) {
        threeDaysOutDay.innerText = daysOfWeek[day - 4];
        twoDaysOutDay.innerText = daysOfWeek[day + 2];
        // console.log(twoDaysOutDay.innerText);
        // console.log(threeDaysOutDay.innerText);
    }
    else if (day < 4) {
        threeDaysOutDay.innerText = daysOfWeek[day +3 ];
        twoDaysOutDay.innerText = daysOfWeek[day + 2];
        // console.log(twoDaysOutDay.innerText);
        // console.log(threeDaysOutDay.innerText);
    }
    let lat = 37.34;
    let lon = -121.89;
    let response = await fetch("http://api.openweathermap.org/data/2.5/onecall?lat="+lat+"&lon="+lon+"&units=metric&exclude=minutely,hourly,alerts&APPID=7822d6bcf587bb9f2ea1d461bc794ab9")
    let weatherData = await response.json();
    console.log(weatherData);
    return displayWeatherData(weatherData);
}

function goAway() {
    let disappear = document.querySelector(".cookie");
    disappear.remove();
}

function changeTemp(element) {
    if (element.value == "fahrenheit") {
        let arrayHigh = document.querySelectorAll(".highTemp");
        for (let i = 0; i < arrayHigh.length; i++) {
            let tempStr = arrayHigh[i].innerText;
            let currentTemp = tempStr.split("°", 1)
            let newTemp = Math.round((currentTemp * 1.8) + 32);
            console.log(newTemp);
            arrayHigh[i].innerText = newTemp + "°";
        }
        let arrayLow = document.querySelectorAll(".lowTemp");
        for (let i = 0; i < arrayLow.length; i++) {
            let tempStr = arrayLow[i].innerText;
            let currentTemp = tempStr.split("°", 1);
            let newTemp = Math.round((currentTemp * 1.8) + 32);
            console.log(newTemp);
            arrayLow[i].innerText = newTemp + "°";
        }
    }
    else if (element.value == "celcius") {
        let arrayHigh = document.querySelectorAll(".highTemp");
        console.log(arrayHigh);
        for (let i = 0; i < arrayHigh.length; i++) {
            let tempStr = arrayHigh[i].innerText;
            let currentTemp = tempStr.split("°", 1)
            console.log(currentTemp);
            let newTemp = Math.round((currentTemp - 32) / 1.8);
            console.log(newTemp);
            arrayHigh[i].innerText = newTemp + "°";
        }
        let arrayLow = document.querySelectorAll(".lowTemp");
        console.log(arrayLow);
        for (let i = 0; i < arrayLow.length; i++) {
            let tempStr = arrayLow[i].innerText;
            let currentTemp = tempStr.split("°", 1);
            console.log(currentTemp);
            let newTemp = Math.round((currentTemp - 32) / 1.8);
            console.log(newTemp);
            arrayLow[i].innerText = newTemp + "°";
        }
    }
    
}

async function newCity(element) {
    // console.log(element);
    alert("Loading weather report");
    let city = element.innerText;
    console.log(city);
    let lat = 0;
    let lon = 0;
    if (city == "Burbank") {
        lat = 34.18;
        lon = -118.30;
        document.getElementById("city_title").innerText = "Burbank";
    }
    else if (city == "Chicago") {
        lat = 41.88;
        lon = -87.62;
        document.getElementById("city_title").innerText = "Chicago";
    }
    else if (city == "Dallas") {
        lat = 32.78;
        lon = -96.81;
        document.getElementById("city_title").innerText = "Dallas";
    }
    let response = await fetch("http://api.openweathermap.org/data/2.5/onecall?lat="+lat+"&lon="+lon+"&units=metric&exclude=minutely,hourly,alerts&APPID=7822d6bcf587bb9f2ea1d461bc794ab9")
    let weatherData = await response.json();
    // console.log(weatherData);
    // let todayWeather = document.querySelector("#today_image");
    // console.log(todayWeather);
    return displayWeatherData(weatherData);
}

function displayWeatherData(weatherData) {
    
    // ------> TODAY <------
    
    let today = {
        "lowTemp": Math.round(weatherData.daily[0].temp.min),
        "highTemp": Math.round(weatherData.daily[0].temp.max),
        "weather": weatherData.daily[0].weather[0].main
    }
    console.log(today);
    let todayImage = document.getElementById("today_image");
    let todayForecast = document.getElementById("today_forecast");
    if (today.weather == "Clouds") {
        todayImage.src = "assets/some_clouds.png";
        todayForecast.innerText = "some clouds"
    }
    else if (today.weather == "Clear") {
        todayImage.src = "assets/some_sun.png";
        todayForecast.innerText = "some sun";
    }
    else if (today.weather == "Rain") {
        todayImage.src = "assets/some_rain.png";
        todayForecast.innerText = "some rain";
    }
    let todayLow = document.getElementById("today").lastElementChild.lastElementChild;
    // console.log(todayLow);
    let todayHigh = document.getElementById("today").lastElementChild.firstElementChild;
    // console.log(todayHigh);
    todayLow.innerText = today["lowTemp"] + "°";
    todayHigh.innerText = today["highTemp"] + "°";
    
    // -----> TOMORROW <------

    let tomorrow = {
        "lowTemp": Math.round(weatherData.daily[1].temp.min),
        "highTemp": Math.round(weatherData.daily[1].temp.max),
        "weather": weatherData.daily[1].weather[0].main
    }
    console.log(tomorrow);
    let tomorrowImage = document.getElementById("tomorrow_image");
    let tomorrowForecast = document.getElementById("tomorrow_forecast");
    if (tomorrow.weather == "Clouds") {
        tomorrowImage.src = "assets/some_clouds.png";
        tomorrowForecast.innerText = "some clouds"
    }
    else if (tomorrow.weather == "Clear") {
        tomorrowImage.src = "assets/some_sun.png";
        tomorrowForecast.innerText = "some sun";
    }
    else if (tomorrow.weather == "Rain") {
        tomorrowImage.src = "assets/some_rain.png";
        tomorrowForecast.innerText = "some rain";
    }
    let tomorrowLow = document.getElementById("tomorrow").lastElementChild.lastElementChild;
    // console.log(tomorrowLow);
    let tomorrowHigh = document.getElementById("tomorrow").lastElementChild.firstElementChild;
    // console.log(tomorrowHigh);
    tomorrowLow.innerText = tomorrow["lowTemp"] + "°";
    tomorrowHigh.innerText = tomorrow["highTemp"] + "°";
    
    // -----> TWO OUT <------
    
    let twoDaysOut = {
        "lowTemp": Math.round(weatherData.daily[2].temp.min),
        "highTemp": Math.round(weatherData.daily[2].temp.max),
        "weather": weatherData.daily[2].weather[0].main
    }
    console.log(twoDaysOut);
    let twoDaysOutImage = document.getElementById("two_days_out_image");
    let twoDaysOutForecast = document.getElementById("two_days_out_forecast");
    if (twoDaysOut.weather == "Clouds") {
        twoDaysOutImage.src = "assets/some_clouds.png";
        twoDaysOutForecast.innerText = "some clouds"
    }
    else if (twoDaysOut.weather == "Clear") {
        twoDaysOutImage.src = "assets/some_sun.png";
        twoDaysOutForecast.innerText = "some sun";
    }
    else if (twoDaysOut.weather == "Rain") {
        twoDaysOutImage.src = "assets/some_rain.png";
        twoDaysOutForecast.innerText = "some rain";
    }
    let twoDaysOutLow = document.getElementById("two_days_out").lastElementChild.lastElementChild;
    // console.log(twoDaysOutLow);
    let twoDaysOutHigh = document.getElementById("two_days_out").lastElementChild.firstElementChild;
    // console.log(twoDaysOutHigh);
    twoDaysOutLow.innerText = twoDaysOut["lowTemp"] + "°";
    twoDaysOutHigh.innerText = twoDaysOut["highTemp"] + "°";
    
    // -----> THREE OUT <------
    
    let threeDaysOut = {
        "lowTemp": Math.round(weatherData.daily[3].temp.min),
        "highTemp": Math.round(weatherData.daily[3].temp.max),
        "weather": weatherData.daily[3].weather[0].main
    }
    console.log(threeDaysOut);
    let threeDaysOutImage = document.getElementById("three_days_out_image");
    let threeDaysOutForecast = document.getElementById("three_days_out_forecast");
    if (threeDaysOut.weather == "Clouds") {
        threeDaysOutImage.src = "assets/some_clouds.png";
        threeDaysOutForecast.innerText = "some clouds"
    }
    else if (threeDaysOut.weather == "Clear") {
        threeDaysOutImage.src = "assets/some_sun.png";
        threeDaysOutForecast.innerText = "some sun";
    }
    else if (threeDaysOut.weather == "Rain") {
        threeDaysOutImage.src = "assets/some_rain.png";
        threeDaysOutForecast.innerText = "some rain";
    }
    let threeDaysOutLow = document.getElementById("three_days_out").lastElementChild.lastElementChild;
    console.log(threeDaysOutLow);
    let threeDaysOutHigh = document.getElementById("three_days_out").lastElementChild.firstElementChild;
    console.log(threeDaysOutHigh);
    threeDaysOutLow.innerText = threeDaysOut["lowTemp"] + "°";
    threeDaysOutHigh.innerText = threeDaysOut["highTemp"] + "°";
    // 
    return weatherData;
}