const myObject = {
    extraInfo: 'JS can run outside the browser',
    platform: 'Node.js',

}


const myGames = {
    titles: ['CS2', 'Elden Ring', 'Cyberpunk 2077'],
    hoursPlayed: 25,
    hadFun: false,
    gameInfo: {
      title: 'Counter Strike 2',
      hours: 4,
      lastPlayedMap: 'Nuke'
    }
  }

console.log(myGames.gameInfo.lastPlayedMap) // nuke


const myInfo = {
    name: "Sam",
    age: 26,
}

// add information to an object after creation

myInfo.dogs = ['Darcy']

console.log(myInfo)


for (let i = 0; i < myGames.titles.length; i++) {
    console.log(myGames.titles[i])
}