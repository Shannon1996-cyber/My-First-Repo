
let name = "Shannon"
let age = "22"
let favouriteColour = "blue"
console.log("There is someone called " + name  + " and she is " + age  + " her favourite colour is " + favouriteColour)


let breakfast = "toast"
let lunch = "sandwhich"
let dinner = "roast"
console.log ("Today I had some " + breakfast + " to start the morning off " + "for lunch I had a " + lunch + " for dinner I had a" + dinner)
dinner = "curry"
console.log("Tomorrows breakfast will be " + breakfast + " lunch will be a " + lunch + " and dinner will be a " + dinner)


let birthDate = new Date(1996,11,17)
let today = Date.now()
let birthday = new Date(2019,11,17)

let newDiff = birthday.getTime() - today 
let newDayDiff = newDiff / (1000 * 60 * 60 * 24)
let newDayDiff2 =(Math.floor(newDayDiff))
console.log(`It is ${newDayDiff2} days untill my birthday`)


console.log(birthDate.getTime())
console.log(today)
let diff = today - birthDate.getTime()
console.log(diff)
let dayDiff = diff / (1000 * 60 * 60 * 24)
console.log(dayDiff)






