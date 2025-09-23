
async function fetchData() {
    const response = await fetch(`https://cookie-upgrade-api.vercel.app/api/upgrades`)
    const data = await response.json()
    createShop(data)
}

function createShop(arrayOfShopItems) {
    arrayOfShopItems.forEach(function (upgrade) {
        console.log(upgrade.name)
        const pName = document.createElement('p')
        pName.innerText = upgrade.name

        const pIncrease = document.createElement('p')
        pIncrease.innerText = upgrade.increase

        document.body.append(pName, pIncrease)
    })
}

fetchData()