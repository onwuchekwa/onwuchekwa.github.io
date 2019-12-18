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