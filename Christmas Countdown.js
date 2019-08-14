let chirstmas = new Date(2019,12,25)
let today = Date.now()
let newDiff = chirstmas.getTime() - today 
let newDayDiff = newDiff / (1000 * 60 * 60 * 24)
let newDayDiff2 =(Math.floor(newDayDiff))
console.log(`It is ${newDayDiff2} days untill chirstmas`)