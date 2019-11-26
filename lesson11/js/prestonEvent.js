//Get Town Event
fetch(requestURL)
.then(function(responseEvent) {
  return responseEvent.json();
})
.then(function(townJsonEvent) {
  //console.table(townJsonEvent);

  const eventObj = townJsonEvent['towns'];
  const getTownEventName = document.getElementById('preston-town-header');
  for(let i = 0; i < eventObj.length; i++) {
    //Preston Town Event
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
      eventImage.setAttribute('alt', eventObj[i].name + ' events');
      getTownEventImage.appendChild(eventImage);
      document.querySelector('div.article-container').appendChild(getTownEventImage);
    } 
  }
});