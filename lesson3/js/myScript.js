//Function to get current year
document.getElementById('current-year').innerHTML = new Date().getFullYear();
//Get document last modified date
document.getElementById('lastUpdated').innerHTML = "Last Updated: " + document.lastModified;

var accordion = document.getElementsByClassName('accordion');
for(var i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener("click", function() {
        this.classList.toggle("accordion-active");
        var panel = this.nextElementSibling;
        if(panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}