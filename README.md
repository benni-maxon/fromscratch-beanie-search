<!-- init commit -->

# BEANIE BABY SEARCH

​
Searches Supabase db for beanie babies by astrology sign.
​

## Make a plan of attack

1. Write HTML elements, label with IDs
2. Create and export/import fetch-utils.js
3. display list from fetched data
4. Populate dropdown options from fetched data
5. Apply search criteria
6. Make page layout with CSS
   ​

## HTML elements (stuff present upon page load)

-   img
-   h1

-   section
-   h2
-   form
-   label
-   select
-   option
-   button

## State (everything you need to track internally using JS variables)

-   let beanies = []
-   let astroSigns = []

## Events (anything that happens via JS when the user interacts with your site)

-   window.addEventListener​('load', async () => {})
-   async function findBeanies(astroSign) {}
-   searchForm.addEvenListener('submit', (e) => {})

## Functions (to plan out how you'll segment things)

​

### Render Functions

-   render-utils
    -   export function renderBeanie(beanie) {}
    -   export function renderAstroSign(astroSign) {}

### Display functions

-   function displayBeanies() {}
-   function displayAstroOptions() {}

### Fetch Functions (if applicable)

-   in fetch-utils.js
    -   export async function getBeanies(astroSign) {}
    -   export async function getAstroSigns() {}

### Other Functions

​

## Slices

1. Populate HTML
2. fetch-utils.js with supabase data (import supabase key and url)
3. render-utils.js from supabase objects
4. app.js to grab DOM elements
5. styling
