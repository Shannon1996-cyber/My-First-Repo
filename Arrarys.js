let coffeeOrder = [
    "Alex - Coffee",
    "Shannon - Coke",
    "Charlie - Tea"
]
console.log(coffeeOrder)


let favoriteSongs = [
    "First song - Abba 1",
    "Second song - Abba 2",
    "Thrid song - Abba 3"
]
console.log(favoriteSongs)

console.log(favoriteSongs[2])
favoriteSongs[0]= "first song - mumma mia"
console.log(favoriteSongs)
console.log(favoriteSongs.length)
favoriteSongs.push("song 4 -  Mountin high")
console.log(favoriteSongs)
favoriteSongs.pop()
console.log(favoriteSongs)


let favoriteWebSite =[
    "google",
    "youtube",
    "facebook"

]
console.log(favoriteWebSite)
favoriteWebSite.pop()
console.log(favoriteWebSite)
console.log(favoriteWebSite.length)
favoriteWebSite.shift()
console.log(favoriteWebSite)
favoriteWebSite.unshift("BBC News")
console.log(favoriteWebSite)
favoriteWebSite.push("BBC")
console.log(favoriteWebSite)
let pos = favoriteWebSite.indexOf("BBC")
console.log(pos)
console.log(favoriteWebSite)
let removedItem = favoriteWebSite.splice(pos,1)
console.log(favoriteWebSite)
console.log(favoriteWebSite.slice(1))

