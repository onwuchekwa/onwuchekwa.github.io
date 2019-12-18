//Temple Information
const requestURL = 'temples.json';

fetch(requestURL)
  .then(function(response) {
    return response.json();
  })
  .then(function(templeObject) {
    const templeDetail = templeObject['temples'];    
    for (let i = 0; i < templeDetail.length; i++){ 
        //Aba Nigeria Temple
        const accordionContact = document.querySelector('div#accordionContact');
        const accordionServices = document.querySelector('div#accordionServices');    
        const accordionHistory = document.querySelector('div#accordionHistory');
        const accordionOrdinance = document.querySelector('div#accordionOrdinance');
        const accordionSession = document.querySelector('div#accordionSession');    
        const accordionClosure = document.querySelector('div#accordionClosure');

        if (templeDetail[i].name == "Aba Nigeria Temple") {          
            let abaH3 = document.getElementById('abaTempleName');
            abaH3.textContent = "Aba Nigeria Temple";

            let contactDetails = document.getElementById('abaTempleContact');
            contactDetails.textContent = "Contact Details";

            let abaTempAddr = document.createElement('p');
            abaTempAddr.textContent = 'Address: ' + templeDetail[i].address;

            let abaTempPhone = document.createElement('p');
            abaTempPhone.textContent = 'Phone Number: ' + templeDetail[i].phone;

            let abaTempEmail = document.createElement('p');
            abaTempEmail.textContent = 'Email: ' + templeDetail[i].email;

            let serviceDetails = document.getElementById('abaTempleServices');
            serviceDetails.textContent = 'Services';

            let historyDetails = document.getElementById('abaTempleHistory');
            historyDetails.textContent = 'History';

            let ordinanceDetails = document.getElementById('abaTempleOrdinance');
            ordinanceDetails.textContent = 'Ordinances';

            let sessionDetails = document.getElementById('abaTempleSession');
            sessionDetails.textContent = 'Sessions';

            let closureDetails = document.getElementById('abaTempleClosure');
            closureDetails.textContent = 'Closures';
            
            accordionContact.appendChild(abaTempAddr);
            accordionContact.appendChild(abaTempPhone);
            accordionContact.appendChild(abaTempEmail);
            
            var templeDt = templeDetail[i].services;
            for (var j = 0; j < templeDt.length; j++) {
                var serviceItem = document.createElement('p');
                serviceItem.textContent = templeDt[j];             
                accordionServices.appendChild(serviceItem); 
            } 
            
            var templeHist = templeDetail[i].history;
            for (var k = 0; k < templeHist.length; k++) {
                var historyItem = document.createElement('p');
                historyItem.textContent = templeHist[k];             
                accordionHistory.appendChild(historyItem); 
            } 

            var templeOrd = templeDetail[i].ordinance_schedule;
            for (var l = 0; l < templeOrd.length; l++) {
                var ordItem = document.createElement('p');
                ordItem.textContent = templeOrd[l];             
                accordionOrdinance.appendChild(ordItem); 
            } 

            var templeSession = templeDetail[i].session_schedule;
            for (var m = 0; m < templeSession.length; m++) {
                var sessionItem = document.createElement('p');
                sessionItem.textContent = templeSession[m];             
                accordionSession.appendChild(sessionItem); 
            } 

            var templeClosure = templeDetail[i].closures;
            for (var n = 0; n < templeClosure.length; n++) {
                var closureItem = document.createElement('p');
                closureItem.textContent = templeClosure[n];             
                accordionClosure.appendChild(closureItem); 
            } 
        }
    }
});

//Accordion
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