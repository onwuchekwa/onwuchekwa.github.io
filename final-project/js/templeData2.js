//Temple Information
const requestURL = 'temples.json';

fetch(requestURL)
  .then(function(response) {
    return response.json();
  })
  .then(function(templeObject) {
    const templeDetail = templeObject['temples'];    
    for (let i = 0; i < templeDetail.length; i++){ 
        //Kinshasa Congo Temple
        if (templeDetail[i].name == "Kinshasa Democratic Republic of the Congo Temple") {             
            const kContact = document.querySelector('div#kaccordionContact');
            const kServices = document.querySelector('div#kaccordionServices');    
            const kHistory = document.querySelector('div#kaccordionHistory');
            const kOrdinance = document.querySelector('div#kaccordionOrdinance');
            const kSession = document.querySelector('div#kaccordionSession');    
            const kClosure = document.querySelector('div#kaccordionClosure');

            let kH3 = document.getElementById('kTempleName');
            kH3.textContent = "Kinshasa Democratic Republic of the Congo Temple";

            let kinContact = document.getElementById('kTempleContact');
            kinContact.textContent = "Contact Details";

            let kinTempAddr = document.createElement('p');
            kinTempAddr.textContent = 'Address: ' + templeDetail[i].address;

            let kinTempPhone = document.createElement('p');
            kinTempPhone.textContent = 'Phone Number: ' + templeDetail[i].phone;

            let kinTempEmail = document.createElement('p');
            kinTempEmail.textContent = 'Email: ' + templeDetail[i].email;

            let kinService = document.getElementById('kTempleServices');
            kinService.textContent = 'Services';

            let kinHistory = document.getElementById('kTempleHistory');
            kinHistory.textContent = 'History';

            let kinOrdinance = document.getElementById('kTempleOrdinance');
            kinOrdinance.textContent = 'Ordinances';

            let kinSession = document.getElementById('kTempleSession');
            kinSession.textContent = 'Sessions';

            let kinClosure = document.getElementById('kTempleClosure');
            kinClosure.textContent = 'Closures';
            
            kContact.appendChild(kinTempAddr);
            kContact.appendChild(kinTempPhone);
            kContact.appendChild(kinTempEmail);
            
            var templeDt = templeDetail[i].services;
            for (var j = 0; j < templeDt.length; j++) {
                var serviceItem = document.createElement('p');
                serviceItem.textContent = templeDt[j];             
                kServices.appendChild(serviceItem); 
            } 
            
            var templeHist = templeDetail[i].history;
            for (var k = 0; k < templeHist.length; k++) {
                var historyItem = document.createElement('p');
                historyItem.textContent = templeHist[k];             
                kHistory.appendChild(historyItem); 
            } 

            var templeOrd = templeDetail[i].ordinance_schedule;
            for (var l = 0; l < templeOrd.length; l++) {
                var ordItem = document.createElement('p');
                ordItem.textContent = templeOrd[l];             
                kOrdinance.appendChild(ordItem); 
            } 

            var templeSession = templeDetail[i].session_schedule;
            for (var m = 0; m < templeSession.length; m++) {
                var sessionItem = document.createElement('p');
                sessionItem.textContent = templeSession[m];             
                kSession.appendChild(sessionItem); 
            } 

            var templeClosure = templeDetail[i].closures;
            for (var n = 0; n < templeClosure.length; n++) {
                var closureItem = document.createElement('p');
                closureItem.textContent = templeClosure[n];             
                kClosure.appendChild(closureItem); 
            } 
        }

        //Johannesburg South Africa Temple
        if (templeDetail[i].name == "Johannesburg South Africa Temple") {             
            const sContact = document.querySelector('div#saaccordionContact');
            const sServices = document.querySelector('div#saaccordionServices');    
            const sHistory = document.querySelector('div#saaccordionHistory');
            const sOrdinance = document.querySelector('div#saaccordionOrdinance');
            const sSession = document.querySelector('div#saaccordionSession');    
            const sClosure = document.querySelector('div#saaccordionClosure');

            let sajH3 = document.getElementById('saTempleName');
            sajH3.textContent = "Johannesburg South Africa Temple";

            let sajContact = document.getElementById('saTempleContact');
            sajContact.textContent = "Contact Details";

            let sajTempAddr = document.createElement('p');
            sajTempAddr.textContent = 'Address: ' + templeDetail[i].address;

            let sajTempPhone = document.createElement('p');
            sajTempPhone.textContent = 'Phone Number: ' + templeDetail[i].phone;

            let sajTempEmail = document.createElement('p');
            sajTempEmail.textContent = 'Email: ' + templeDetail[i].email;

            let sajService = document.getElementById('saTempleServices');
            sajService.textContent = 'Services';

            let sajHistory = document.getElementById('saTempleHistory');
            sajHistory.textContent = 'History';

            let sajOrdinance = document.getElementById('saTempleOrdinance');
            sajOrdinance.textContent = 'Ordinances';

            let sajSession = document.getElementById('saTempleSession');
            sajSession.textContent = 'Sessions';

            let sajClosure = document.getElementById('saTempleClosure');
            sajClosure.textContent = 'Closures';
            
            sContact.appendChild(sajTempAddr);
            sContact.appendChild(sajTempPhone);
            sContact.appendChild(sajTempEmail);
            
            var templeDt = templeDetail[i].services;
            for (var j = 0; j < templeDt.length; j++) {
                var serviceItem = document.createElement('p');
                serviceItem.textContent = templeDt[j];             
                sServices.appendChild(serviceItem); 
            } 
            
            var templeHist = templeDetail[i].history;
            for (var k = 0; k < templeHist.length; k++) {
                var historyItem = document.createElement('p');
                historyItem.textContent = templeHist[k];             
                sHistory.appendChild(historyItem); 
            } 

            var templeOrd = templeDetail[i].ordinance_schedule;
            for (var l = 0; l < templeOrd.length; l++) {
                var ordItem = document.createElement('p');
                ordItem.textContent = templeOrd[l];             
                sOrdinance.appendChild(ordItem); 
            } 

            var templeSession = templeDetail[i].session_schedule;
            for (var m = 0; m < templeSession.length; m++) {
                var sessionItem = document.createElement('p');
                sessionItem.textContent = templeSession[m];             
                sSession.appendChild(sessionItem); 
            } 

            var templeClosure = templeDetail[i].closures;
            for (var n = 0; n < templeClosure.length; n++) {
                var closureItem = document.createElement('p');
                closureItem.textContent = templeClosure[n];             
                sClosure.appendChild(closureItem); 
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