/* Imports */
import { getAstroSigns, getBeanies } from './fetch-utils.js';
import { renderAstroSign, renderBeanie } from './render-utils.js';
/* Get DOM Elements */
const searchForm = document.querySelector('#search-form');
const beanieList = document.querySelector('#beanie-list');
const astroSignSelect = document.querySelector('#astro-sign-select');

/* State */

let beanies = [];
let astroSigns = [];

/* Events */

window.addEventListener('load', async () => {
    findBeanies();
    const response = await getAstroSigns();
    astroSigns = response.data;
});

async function findBeanies(astroSign) {
    const response = await getAstroSigns();
    beanies = response.data;
    displayBeanies();
}

/* Display Functions */

function displayBeanies() {
    beanieList.innerHTML = '';

    for (let beanie of beanies) {
        const beanieEl = renderBeanie(beanie);
        beanieList.append(beanieEl);
    }
}

function displayAstroOptions() {
    for (let astroSign of astroSigns) {
        const option = renderAstroSign(astroSign);
        astroSignSelect.append(option);
    }
}
// (don't forget to call any display functions you want to run on page load!)
