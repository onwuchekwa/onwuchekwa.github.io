//Toggle Menu
function toggleMenu() { 
    document.getElementsByClassName("main-nav")[0].classList.toggle("responsive");  
}

//Date function
function getFullDate() {
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dt = new Date();
    const date = dt.getDate();
    const monthName = monthNames[dt.getMonth()];
    const dayName = dayNames[dt.getDay()];
    const fullYear = dt.getFullYear();
    const date_value = `${dayName}, ${date} ${monthName} ${fullYear}`;
    return {
        fullDate: date_value,
        weekDayName: dayName,
        currentYear: fullYear
    };
}


//Lazy load image using the Intersection Observer API
const images = document.querySelectorAll('img[data-src]');

const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
};

const fetchImage = (url) => {
  console.log(url)
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.src = url;
    image.onload = resolve;
    image.onerror = reject;
  });
}

const loadImage = (image) => {
  const src = image.dataset.src;
  fetchImage(src).then(() => {
    image.src = src;
  })
}

const handleIntersection = (entries, observer) => {
  entries.forEach(entry => {
    if(entry.intersectionRatio > 0) {
      //console.log(entry.intersectionRatio);
      loadImage(entry.target)
    }
  })
}

// The observer for the images on the page
const observer = new IntersectionObserver(handleIntersection, options);

images.forEach(img => {
  observer.observe(img);
})

//Adjust Severity
function adjustSeverity(severity_value) {
  document.getElementById("stormseverityvalue").innerHTML = severity_value;
}

//Town Information JSON

const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
//const requestURL = 'weather-town.json';

fetch(requestURL)
  .then(function(response) {
    return response.json();
  })
  .then(function(townJsonObject) {
    //console.table(townJsonObject);

    const towns = townJsonObject['towns'];
    const townsCovered = ["Fish Haven", "Soda Springs", "Preston"];
    for(let i = 0; i < towns.length; i++) {
      if (townsCovered.includes(towns[i].name)) {
        let article = document.createElement('article');
        article.setAttribute('class', 'town-card');

        let textContainer = document.createElement('div');
        textContainer.setAttribute('class', 'text-container');

        let townName = document.createElement('h3');
        townName.textContent = towns[i].name;

        let townMotto = document.createElement('h4');
        townMotto.textContent = towns[i].motto;

        let yearFounded = document.createElement('p');
        yearFounded.textContent = 'Year Founded: ' + towns[i].yearFounded;

        let currentPopulation = document.createElement('p');
        currentPopulation.textContent = 'Population: ' + towns[i].currentPopulation;

        let averageRainfall = document.createElement('p');
        averageRainfall.textContent = 'Annual Rain Fall: ' + towns[i].averageRainfall;

        let img = document.createElement('img');
        img.setAttribute('src', 'images/' + towns[i].photo);
        img.setAttribute('alt', towns[i].name + ' - ' + i)

        textContainer.appendChild(townName);
        textContainer.appendChild(townMotto);
        textContainer.appendChild(yearFounded);
        textContainer.appendChild(currentPopulation);
        textContainer.appendChild(averageRainfall);
        article.appendChild(textContainer);
        article.appendChild(img);
        document.querySelector('div.towns').appendChild(article);
      }
    }
  });

  //Get Town Event
  fetch(requestURL)
  .then(function(responseEvent) {
    return responseEvent.json();
  })
  .then(function(townJsonEvent) {
    console.table(townJsonEvent);

    const eventObj = townJsonEvent['towns'];
    const getTownEventName = document.getElementById('preston-town-header');
    const getTownEventImage = document.getElementById('preston-event-image');
    for(let i = 0; i < eventObj.length; i++) {
      if (eventObj[i].name == 'Preston'){
        getTownEventName.innerHTML = eventObj[i].name + '&#39;s Upcoming Event:';
        for (let j = 0; j < eventObj[i].events.length; j++){
          const pEvent = document.createElement('p');
          pEvent.setAttribute('class', 'para-event');
          pEvent.textContent = eventObj[i].events[j];
          document.querySelector('div.event-panel').appendChild(pEvent);
        }
        const getTownEventImage = document.createElement('picture');
        getTownEventImage.setAttribute('class', 'preston-event-image');

        const eventImage = document.createElement('img');
        eventImage.setAttribute('class', 'img1');
        eventImage.setAttribute('src', 'images/preston-event.jpg');
        eventImage.setAttribute('alt', eventObj[i].name + 'events');
        getTownEventImage.appendChild(eventImage);
        document.querySelector('div.article-container').appendChild(getTownEventImage);
      }
    }
  });