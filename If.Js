//Practice If Staments
//Shannon Barnard, 13.08.2019

let weather = "clouds"

if (weather == "sunny"){
    console.log("Better pack the sunscreen")
}else if (weather == "rain"){
    console.log("Better bring your rain coat")
}else{
    console.log("Ok have a good day")
}





let legalAge =18
let customersAge =50

if(customersAge >= legalAge){
    console.log("Have a drink")
}else{
    console.log("No Beer for you")
}





//Dodgy Stans Nightclub
// Female < 25 get in for free
// Female > 35 £150
// Male < 25 £10
// Male > 35 £150
//Anyone else £15

let gender = "female"
let age = 26

if (gender == "female" && age < 25){
    console.log("You get in free")
}else if (gender == "female" && age > 35){
    console.log("You must pay £150 to get in")
}else if (gender == "male" && age < 25){
    console.log("you must pay £10 to enter")
}else if (gender = "male" && age > 35){
    console.log("You must pay £150 to enter")
}else{console.log("You must pay £15 to enter")
}