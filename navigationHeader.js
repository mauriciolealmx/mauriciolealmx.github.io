/** 
 * The "navigation" variable comes from the window object in
 * this case because the data was given and hard coded. On a normal
 * scenario the Data would be fetched in an async manner. And, 
 * when the Data arrives, we would update the DOM.  
 */
function navigationList(cities) {
    const citiesListHTML = cities.map(city => listItem(city)).join('');
    return (`
        <ul>${citiesListHTML}</ul>
        <span class="underline"></span>
    `);
}

function listItem({ label }) {
    return `<li><a>${label}</a></li>`
}

const { cities } = navigation;
const navigationElement = document.querySelector('#navigation');
navigationElement.innerHTML = navigationList(cities);
