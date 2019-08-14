let coffeeIsGrinding = false
const pressGrindBeans=()=>{
    if (coffeeIsGrinding){
        console.log("stopping the grind")
        coffeeIsGrinding=false
    
}else{
    console.log("grinding is about to begin") 
    coffeeIsGrinding = true
}
}

pressGrindBeans ()
pressGrindBeans() 
pressGrindBeans()


let drinkType = (size, type)=>{
    console.log(`${size} ${type}`)
}
drinkType("large", "tea")
drinkType("Small", "coke")