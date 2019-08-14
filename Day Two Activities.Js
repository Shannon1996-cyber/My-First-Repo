let password = "hello12334533"

if (password.length<8){
    console.log("your password is too short, try again")
}else if (password.length>8){
    console.log("Your password is strong you may continue")
}

let num = 15
if (num  %3==0 || num %5==0){
    console.log("this number is divisible by 3 or 5")
}else{
    console.log("This number is not divisable by 3 or 5")
}


let num2 = 15

if (num2 %3==0 && num2 %5==0){
    console.log("FIZZ BUZZ")
}else if (num2 %3==0){
    console.log("FIZZ")
}else if (num2 %5==0){
    console.log("BUZZ")
}




let s = "Hello World"
let s1 = s.split("")
console.log(s1)
let s2 =s1.reverse()
console.log(s2)
let s3 = s2.join()
console.log(s3)

