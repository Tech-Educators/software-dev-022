let myArray = ['Sam', 'Connor', 'Tim', 'Joe', 'Manny']

// forEach doesn't return anything - we can only use it for side effects
const notifications = myArray.forEach((staff) => {
    return `${staff} is at work`
})

console.log(notifications)

// .map will produce a new array out of the returned value from each instance of the callback function running.
const newNotification = myArray.map((staff) => {
    return `${staff} is at work`
})

console.log(newNotification)