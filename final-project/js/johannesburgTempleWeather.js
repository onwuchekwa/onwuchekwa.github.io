var unitCode = "imperial";
var appID = "ec4187e2c652e5e5e31629577f8c5a74";
var johannesburgLat = -26.177933, johannesburgLon =  28.039280;

var  johannesburgWeatherURL = "https://api.openweathermap.org/data/2.5/weather?lat=" + johannesburgLat + "&lon=" + johannesburgLon + "&units=" + unitCode + "&APPID=" + appID;

//Johannesburg South Africa Weather
fetch(johannesburgWeatherURL)
.then((sResponseURL) => sResponseURL.json())
.then((sWeatherObject) => {
    const sCurrentWeather = sWeatherObject;
    const sWeather = sCurrentWeather.weather[0];

    // Get Weather Summary
    document.getElementById('saCurrentWeather').textContent = sWeather.main;
    document.getElementById('saTemp').textContent = sCurrentWeather.main.temp_max;
    document.getElementById('saHumidPercent').textContent = sCurrentWeather.main.humidity;
    document.getElementById('saWindSpeed').textContent = sCurrentWeather.wind.speed;

});

//WindChill calculator
var saWindChill = document.getElementById("saWindChill");
var saTemp = parseFloat(document.getElementById("saTemp").textContent);
var saWindSpeed = parseFloat(document.getElementById("saWindSpeed").textContent);

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
        saWindChill.innerHTML = getWindChill(saTemp, saWindSpeed);
    }
    
    if (event.target.readyState === "responsive") {
        saWindChill.innerHTML = getWindChill(saTemp, saWindSpeed);
    }
});
