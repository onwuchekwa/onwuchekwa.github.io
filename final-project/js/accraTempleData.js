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

        //Accra Ghana Temple
        if (templeDetail[i].name == "Accra Ghana Temple") {             
            const aContact = document.querySelector('div#accraaccordionContact');
            const aServices = document.querySelector('div#accraaccordionServices');    
            const aHistory = document.querySelector('div#accraaccordionHistory');
            const aOrdinance = document.querySelector('div#accraaccordionOrdinance');
            const aSession = document.querySelector('div#accraaccordionSession');    
            const aClosure = document.querySelector('div#accraaccordionClosure');

            let accraH3 = document.getElementById('accraTempleName');
            accraH3.textContent = "Accra Ghana Temple";

            let contactAccra = document.getElementById('accraTempleContact');
            contactAccra.textContent = "Contact Details";

            let accraTempAddr = document.createElement('p');
            accraTempAddr.textContent = 'Address: ' + templeDetail[i].address;

            let accraTempPhone = document.createElement('p');
            accraTempPhone.textContent = 'Phone Number: ' + templeDetail[i].phone;

            let accraTempEmail = document.createElement('p');
            accraTempEmail.textContent = 'Email: ' + templeDetail[i].email;

            let serviceAccra = document.getElementById('accraTempleServices');
            serviceAccra.textContent = 'Services';

            let historyAccra = document.getElementById('accraTempleHistory');
            historyAccra.textContent = 'History';

            let ordinanceAccra = document.getElementById('accraTempleOrdinance');
            ordinanceAccra.textContent = 'Ordinances';

            let sessionAccra = document.getElementById('accraTempleSession');
            sessionAccra.textContent = 'Sessions';

            let closureAccra = document.getElementById('accraTempleClosure');
            closureAccra.textContent = 'Closures';
            
            aContact.appendChild(accraTempAddr);
            aContact.appendChild(accraTempPhone);
            aContact.appendChild(accraTempEmail);
            
            var templeDt = templeDetail[i].services;
            for (var j = 0; j < templeDt.length; j++) {
                var serviceItem = document.createElement('p');
                serviceItem.textContent = templeDt[j];             
                aServices.appendChild(serviceItem); 
            } 
            
            var templeHist = templeDetail[i].history;
            for (var k = 0; k < templeHist.length; k++) {
                var historyItem = document.createElement('p');
                historyItem.textContent = templeHist[k];             
                aHistory.appendChild(historyItem); 
            } 

            var templeOrd = templeDetail[i].ordinance_schedule;
            for (var l = 0; l < templeOrd.length; l++) {
                var ordItem = document.createElement('p');
                ordItem.textContent = templeOrd[l];             
                aOrdinance.appendChild(ordItem); 
            } 

            var templeSession = templeDetail[i].session_schedule;
            for (var m = 0; m < templeSession.length; m++) {
                var sessionItem = document.createElement('p');
                sessionItem.textContent = templeSession[m];             
                aSession.appendChild(sessionItem); 
            } 

            var templeClosure = templeDetail[i].closures;
            for (var n = 0; n < templeClosure.length; n++) {
                var closureItem = document.createElement('p');
                closureItem.textContent = templeClosure[n];             
                aClosure.appendChild(closureItem); 
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