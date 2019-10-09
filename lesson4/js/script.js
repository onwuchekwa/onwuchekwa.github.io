//Function to get current year
document.getElementById('current-year').innerHTML = new Date().getFullYear();

//Toggle Menu
function toggleMenu() { 
    document.getElementsByClassName("main-nav")[0].classList.toggle("responsive");  
}

//Footer Date function
function getFullDate() {
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dt = new Date();
    const date = dt.getDate();
    const monthName = monthNames[dt.getMonth()];
    const dayName = dayNames[dt.getDay()];
    const fullYear = dt.getFullYear();
    const date_value = `${dayName}, ${date} ${monthName} ${fullYear}`;
    return date_value;
}

document.getElementById('todayDate').innerHTML = getFullDate();
