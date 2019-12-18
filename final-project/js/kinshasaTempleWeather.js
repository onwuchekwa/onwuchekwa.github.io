var unitCode = "imperial";
var appID = "ec4187e2c652e5e5e31629577f8c5a74";
var kinshasaLat = -4.327345, kinshasaLon = 15.273766;

var  kinshasaWeatherURL = "https://api.openweathermap.org/data/2.5/weather?lat=" + kinshasaLat + "&lon=" + kinshasaLon + "&units=" + unitCode + "&APPID=" + appID;

//Kinshasa Congo Weather
fetch(kinshasaWeatherURL)
.then((kResponseURL) => kResponseURL.json())
.then((kWeatherObject) => {
    const kCurrentWeather = kWeatherObject;
    const kWeather = kCurrentWeather.weather[0];

    // Get Weather Summary
    document.getElementById('kCurrentWeather').textContent = kWeather.main;
    document.getElementById('kTemp').textContent = kCurrentWeather.main.temp_max;
    document.getElementById('kHumidPercent').textContent = kCurrentWeather.main.humidity;
    document.getElementById('kWindSpeed').textContent = kCurrentWeather.wind.speed;

});

//WindChill calculator
var kWindChill = document.getElementById("kWindChill");
var kTemp = parseFloat(document.getElementById("kTemp").textContent);
var kWindSpeed = parseFloat(document.getElementById("kWindSpeed").textContent);

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
        kWindChill.innerHTML = getWindChill(kTemp, kWindSpeed);
    }
    
    if (event.target.readyState === "responsive") {
        kWindChill.innerHTML = getWindChill(kTemp, kWindSpeed);
    }
});
