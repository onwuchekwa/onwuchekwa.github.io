var unitCode = "imperial";
var appID = "ec4187e2c652e5e5e31629577f8c5a74";
var accraLat = 5.567451, accraLon = -0.193666;

var  accraWeatherURL = "https://api.openweathermap.org/data/2.5/weather?lat=" + accraLat + "&lon=" + accraLon + "&units=" + unitCode + "&APPID=" + appID;

//Accra Ghana Weather
fetch(accraWeatherURL)
.then((accraResponseURL) => accraResponseURL.json())
.then((accraWeatherObject) => {
    const accraCurrentWeather = accraWeatherObject;
    const accraWeather = accraCurrentWeather.weather[0];

    // Get Weather Summary
    document.getElementById('accraCurrentWeather').textContent = accraWeather.main;
    document.getElementById('accraTemp').textContent = accraCurrentWeather.main.temp_max;
    document.getElementById('accraHumidPercent').textContent = accraCurrentWeather.main.humidity;
    document.getElementById('accraWindSpeed').textContent = accraCurrentWeather.wind.speed;

});

//WindChill calculator

var accraWindChill = document.getElementById("accraWindChill");
var accraTemp = parseFloat(document.getElementById("accraTemp").textContent);
var accraWindSpeed = parseFloat(document.getElementById("accraWindSpeed").textContent);

function getWindChill(temp, winds){
    var tempF = temp;
    var speed = winds;
    if(tempF <= 50 && speed > 3)
        return Math.floor(calculateWindChill(tempF, speed)) + "&#8457;";
    else 
        return 'N/A';
}

function calculateWindChill(tempF, speed){
    var powerSpeed = Math.pow(speed, 0.16);
    var mtempF = 0.6215 * tempF;
    var mpowerSpeed = 35.75 * powerSpeed;
    var mtempF_mpowerSpeed = 0.4275 * tempF * powerSpeed;
    var wChillFomula = 35.74 + mtempF - mpowerSpeed + mtempF_mpowerSpeed;
    return wChillFomula;
}

// Load wind chill value after all resources are loaded
document.addEventListener('readystatechange', event => {
    if (event.target.readyState === "complete") {
        accraWindChill.innerHTML = getWindChill(accraTemp, accraWindSpeed);
    }
    
    if (event.target.readyState === "responsive") {
        accraWindChill.innerHTML = getWindChill(accraTemp, accraWindSpeed);
    }
});
