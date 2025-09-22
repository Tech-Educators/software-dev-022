const cookieImg = document.getElementById('cookieImg')
const cookieDisplay = document.getElementById('cookiesDisplay')
const cpsDisplay = document.getElementById('cpsDisplay')
const shopDisplay = document.getElementById('shopDisplay')


let state = {
    cookies: 1000,
    cps: 1,
    // use this as a big list of all the things I've bought
    purchases: []
}


// responsible for running all other functions
function game() {
    loadGame()
    fetchData()
    setInterval(() => {
        // console.log(getCookiesPerSecond())
        state.cookies += getCookiesPerSecond()
        cpsDisplay.innerText = getCookiesPerSecond()
        cookieDisplay.innerText = state.cookies

        // save the game
        saveGame()
    }, 1000)
}

function getCookiesPerSecond() {
    // if the length of the array isn't 0 (as we've bought somethign)
    if (state.purchases.length != 0) {
        let total = 1;
        state.purchases.forEach((purchase) => {
            total += purchase.increase
        })
        // whenver we encounter a 'return' statement inside a function the code stops running
        return total
    } 
    // if there is nothing inside the array, just return 1.
    return 1
}

cookieImg.addEventListener('click', () => {
    cookieImg.classList.toggle('big')
    state.cookies += 1
    setTimeout(() => {
        cookieImg.classList.toggle('big')
    }, 200)
})

async function fetchData() {
    const response = await fetch(`https://cookie-upgrade-api.vercel.app/api/upgrades`)
    const shopItems = await response.json()
    generateShop(shopItems)
}

function generateShop(arrayOfItems) {
    console.log(arrayOfItems)
    arrayOfItems.forEach(function(item) {
        const itemContainer = document.createElement('div')

        const nameDisplay = document.createElement('p')
        nameDisplay.innerText = item.name

        const costDisplay = document.createElement('p')
        costDisplay.innerText = item.cost

        const upgradeAmountDisplay = document.createElement('p')
        upgradeAmountDisplay.innerText = item.increase

        const buyButton = document.createElement('button')
        buyButton.innerText = 'Buy'

        buyButton.addEventListener('click', () => {
            // pass in the item details to the purchase item function
            purchaseItem(item)
        })

        itemContainer.append(nameDisplay, costDisplay, upgradeAmountDisplay, buyButton)
        shopDisplay.appendChild(itemContainer)
    })
}


function purchaseItem(itemParam) {
    // how to tel if the user can buy something?
    // early exist/gaurd clause - check for the wrong result first and return early if not possible
    if (itemParam.cost > state.cookies) {
        alert(`You can't buy that`)
        return;
    }

    state.cookies -= itemParam.cost
    // how do I know if I've purchased something? 
    state.purchases.push(itemParam)

}

game()


function saveGame() {
    localStorage.setItem('state', JSON.stringify(state)) 
}

function loadGame() {
    console.log(localStorage.getItem('state'))
    // if there is nothing in local storage end the function early and return;
    if (localStorage.getItem('state') === null) {
        return;
    }
    state = JSON.parse(localStorage.getItem('state'))
}


function resetGame() {
    localStorage.clear()
    state = {
        cookies: 0,
        cps: 1,
        purchases: []
    }
}

// state.purchases - [{increase: 10}, {increase: 10}, {increase: 100}, {increase: 50}]
// Using javascript, how would you figure out how much the total of the 'increase' is. 
// What programming teqchniques could we use to figure out how much all of these increase properties are added together.


// const array = [{number: 10}, {number: 20}]
// let total = 0;

// for (let i = 0; i < array.length; i++) {
//     total += array[i].number
// }

// array.forEach(item => {
//     total += item.number
// })

// total = 30