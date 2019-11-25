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