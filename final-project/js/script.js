//Function to get current year
document.getElementById('current-year').innerHTML = new Date().getFullYear();

function loadDeferredIframe() {
    // this function will load the Google homepage into the iframe
    var iframe = document.getElementById("myIframe");
    iframe.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3101.405019701325!2d-77.09772048512752!3d38.983251779557506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7c97b6b3b5b43%3A0x9c8eb1c5547b83eb!2s4800%20Montgomery%20Ln%20%23300%2C%20Bethesda%2C%20MD%2020814%2C%20USA!5e0!3m2!1sen!2sgh!4v1576359994991!5m2!1sen!2sgh"; // here goes your url
};
window.onload = loadDeferredIframe;