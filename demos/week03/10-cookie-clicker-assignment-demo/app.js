// default values for cookies and cps
let cookieCount = 0;
let cps = 1;

// I'll need to fetch my display elements up here from my HTML

// or we can get fancy and use an object to store this data - this will make our lives easier if we start working with local storage

let state = {
    cookieCount: 0,
    cps: 1
}

setInterval(function() {
    cookieCount = cookieCount + cps
    console.log(cookieCount)
    // update the dom to display the new count
    // save to cookieCount/cps (or state) to local storage.
}, 1000)


// ---- Lets make it so clicking on the cookie image makes cookies go up by one

// get my cookie element from the dom
// add an event listener to it so I know when the user clicked
// increase cookieCount by 1 when clicked on


// ---- lets get the shop items displayed on the screen, from the API. 
// link: https://cookie-upgrade-api.vercel.app/api/upgrades

async function fetchUpgrades() {
    // await fetch
    // await something.json()

    // the upgrades are an array of objects

    // we can use forEach or a for loop to loop over each of the upgrades. 
        // use create element to create tags for the upgrade name, cps, and increase. 
        // also need to make a buy button. 
        // listen for a click event on each of the buttons. 
            // try to purchase the upgrade
            // can we afford the upgrade?
            // if we can afford the upgrade - 
                // update cps to add the increase of the upgrade
                // take away the cost of the upgrade from our cookies
            // if we can't afford the upgrade?
                // send an alert to say 'you can't afford that. 
}

// for purchasing upgrades ->
// could do a function for each updates
// or we could make a generic purchase function that works for all. 


// specific function
function fivePlusFive() {
    return 5 + 5
}

// generic
function sum(a, b) {
    return a + b
}