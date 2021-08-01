console.log("Great success!");

// function goAway(element) {
//     disappear = element.parentNode;
//     disappear.remove();
// }

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
    
    
    
    
    
//     let selector = document.querySelector("#changeT");
//     let currentTemp = selector.options[selector.selectedIndex].innerText;
//     let convertHigh = document.querySelectorAll(".highTemp");
//     console.log(convertHigh);
//     let convertLow = document.querySelectorAll(".lowTemp");
//     console.log(convertLow);
//     if (currentTemp == "°F") {
//         for (let i = 0; i < convertHigh.length; i++) {
//             let currentDeg = (convertHigh[i].innerText);
//             let string = currentDeg.toString();
//             console.log(currentDeg.typeOf);
//             // tempArr.push()
//             let newDeg = (currentDeg * 1.8) + 32;
//             console.log(newDeg);
//         }
//         for (let i = 0; i < convertLow.length; i++) {
//             let currentDeg = (convertLow[i].innerText);
//         }
//     }
// }