/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector('#temples');
const templeList = [];

/* async displayTemples Function */
const displayTemples = (temples) => {
  temples.forEach((temple) => {
    const article = document.createElement('article');
    
    const h3 = document.createElement('h3');
    h3.textContent = temple.templeName;
    
    const img = document.createElement('img');
    
    // Check if the image URL is relative and make it absolute
    if (temple.imageUrl.startsWith('/')) {
      img.src = 'https://byui-cse.github.io/cse121b-ww-course/resources/temples.json' + temple.imageUrl;
    } else {
      img.src = temple.imageUrl;
    }
    
    img.alt = temple.location;
    
    article.appendChild(h3);
    article.appendChild(img);
    
    templesElement.appendChild(article);
  });
}

/* async getTemples Function using fetch() */
const getTemples = async () => {
  const response = await fetch('https://byui-cse.github.io/cse121b-ww-course/resources/temples.json'); 
  const data = await response.json();
  templeList.push(...data);
  displayTemples(templeList);
}

/* reset Function */
const reset = () => {
  templesElement.innerHTML = '';
}

/* sortBy Function */
const sortBy = (temples) => {
  reset();
  const filter = document.querySelector('#sortBy').value;
  
  switch (filter) {
    case 'utah':
      displayTemples(temples.filter((temple) => temple.location.includes('Utah')));
      break;
    case 'nonutah':
      displayTemples(temples.filter((temple) => !temple.location.includes('Utah')));
      break;
    case 'older':
      displayTemples(temples.filter((temple) => new Date(temple.dedicationDate) < new Date(1950, 0, 1)));
      break;
    case 'all':
      displayTemples(temples);
      break;
  }
}

const sortByElement = document.querySelector('#sortBy');
sortByElement.addEventListener('change', () => {
  sortBy(templeList);
});

/* Event Listener */
getTemples();
