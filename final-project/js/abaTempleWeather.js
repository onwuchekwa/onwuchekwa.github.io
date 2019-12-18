var unitCode = "imperial";
var appID = "ec4187e2c652e5e5e31629577f8c5a74";
var abaLat = 5.147793, abaLon = 7.356660;

var  abaWeatherURL = "https://api.openweathermap.org/data/2.5/weather?lat=" + abaLat + "&lon=" + abaLon + "&units=" + unitCode + "&APPID=" + appID;

//Aba Nigeria Weather
fetch(abaWeatherURL)
.then((responseURL) => responseURL.json())
.then((abaWeatherObject) => {
    const abaCurrentWeather = abaWeatherObject;
    const abaWeather = abaCurrentWeather.weather[0];

    // Get Weather Summary
    document.getElementById('abaCurrentWeather').textContent = abaWeather.main;
    document.getElementById('abaTemp').textContent = abaCurrentWeather.main.temp_max;
    document.getElementById('abaHumidPercent').textContent = abaCurrentWeather.main.humidity;
    document.getElementById('abaWindSpeed').textContent = abaCurrentWeather.wind.speed;

});

//WindChill calculator
var abaWindChill = document.getElementById("abaWindChill");
var abaTemp = parseFloat(document.getElementById("abaTemp").textContent);
var abaWindSpeed = parseFloat(document.getElementById("abaWindSpeed").textContent);

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
        abaWindChill.innerHTML = getWindChill(abaTemp, abaWindSpeed);
    }
    
    if (event.target.readyState === "responsive") {
        abaWindChill.innerHTML = getWindChill(abaTemp, abaWindSpeed);
    }
});
