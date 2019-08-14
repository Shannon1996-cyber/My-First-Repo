let orderCount = 0; 

const takeOrder = (topping, andSecondTopping) => {
  console.log(`Pizza with ${topping} and ${andSecondTopping}`);
  orderCount++;
}

takeOrder("pineapple", "Ham");