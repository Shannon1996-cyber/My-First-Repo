//Practice Functions
//Shannon Barnard, 13.08.2019


const reverseString = (s) =>{
    return s.split("").reverse().join("")
}
console.log(reverseString("hello world"))


const addThreeNumbers = (num1, num2, num3)=>{
    console.log("I am adding 3 numbers")
    return num1+num2+num3
}
console.log(addThreeNumbers(10,20,30))



const hello = ()=>{
    console.log("Hello")
}

const displayName = (name)=>{
    console.log(` ${name}`)
}

const displayGreeting = (name) =>{
    hello()
    displayName(name)
}


hello ()
displayName("shannon")
displayGreeting("shannon")