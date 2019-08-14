//ATM Practice
//Shannon Barnard, 13-08-2019

let pinNumber = 1234
let accnum = 50449921;
let balance = 1500

const cashWithdrawal = (amount, accnum) =>{
    if (pinNumber = 1234 && amount <= balance){
     console.log(`Withdrawing ${amount} from account ${accnum}`);
}else{
    console.log("You do not enough funds for this")}
}


cashWithdrawal(300, accnum);
cashWithdrawal(30, 50449921);
cashWithdrawal(200, 50447921);
