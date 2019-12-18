var unitCode = "imperial";
var appID = "ec4187e2c652e5e5e31629577f8c5a74";
var abaLat = 5.147793, abaLon = 7.356660;
var accraLat = 5.567451, accraLon = -0.193666;
var kinshasaLat = -4.327345, kinshasaLon = 15.273766;
var johannesburgLat = -26.177933, johannesburgLon =  28.039280;

var  abaWeatherURL = "https://api.openweathermap.org/data/2.5/weather?lat=" + abaLat + "&lon=" + abaLon + "&units=" + unitCode + "&APPID=" + appID;

var  accraWeatherURL = "https://api.openweathermap.org/data/2.5/weather?lat=" + accraLat + "&lon=" + accraLon + "&units=" + unitCode + "&APPID=" + appID;

var  kinshasaWeatherURL = "https://api.openweathermap.org/data/2.5/weather?lat=" + kinshasaLat + "&lon=" + kinshasaLon + "&units=" + unitCode + "&APPID=" + appID;

var  johannesburgWeatherURL = "https://api.openweathermap.org/data/2.5/weather?lat=" + johannesburgLat + "&lon=" + johannesburgLon + "&units=" + unitCode + "&APPID=" + appID;


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

//Johanessburg South Africa Weather
fetch(johannesburgWeatherURL)
.then((jsaResponseURL) => jsaResponseURL.json())
.then((jsaWeatherObject) => {
    const jsaCurrentWeather = jsaWeatherObject;
    const jsaWeather = jsaCurrentWeather.weather[0];

    // Get Weather Summary
    document.getElementById('saCurrentWeather').textContent = jsaWeather.main;
    document.getElementById('saTemp').textContent = jsaCurrentWeather.main.temp_max;
    document.getElementById('saHumidPercent').textContent = jsaCurrentWeather.main.humidity;
    document.getElementById('saWindSpeed').textContent = jsaCurrentWeather.wind.speed;

});

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
var abaWindChill = document.getElementById("abaWindChill");
var abaTemp = parseFloat(document.getElementById("abaTemp").textContent);
var abaWindSpeed = parseFloat(document.getElementById("abaWindSpeed").textContent);

var saWindChill = document.getElementById("saWindChill");
var saTemp = parseFloat(document.getElementById("saTemp").textContent);
var saWindSpeed = parseFloat(document.getElementById("saWindSpeed").textContent);

var accraWindChill = document.getElementById("accraWindChill");
var accraTemp = parseFloat(document.getElementById("accraTemp").textContent);
var accraWindSpeed = parseFloat(document.getElementById("accraWindSpeed").textContent);

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
        abaWindChill.innerHTML = getWindChill(abaTemp, abaWindSpeed);
        saWindChill.innerHTML = getWindChill(saTemp, saWindSpeed);
        accraWindChill.innerHTML = getWindChill(accraTemp, accraWindSpeed);
        kWindChill.innerHTML = getWindChill(kTemp, kWindSpeed);
    }
    
    if (event.target.readyState === "responsive") {
        abaWindChill.innerHTML = getWindChill(abaTemp, abaWindSpeed);
        saWindChill.innerHTML = getWindChill(saTemp, saWindSpeed);
        accraWindChill.innerHTML = getWindChill(accraTemp, accraWindSpeed);
        kWindChill.innerHTML = getWindChill(kTemp, kWindSpeed);
    }
});
