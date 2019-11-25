//Town Information JSON
const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

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