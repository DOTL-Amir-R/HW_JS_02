const firstNumber = +prompt("write your first number")
const action = prompt("what action do you want(+ - * /)")
const secondNumber = +prompt("write your second number")
let answer=null;

switch(action){
    case "+":
        answer= firstNumber + secondNumber;
        break;
    case "*":
        answer= firstNumber * secondNumber;
        break;
    case "-":
        answer= firstNumber - secondNumber;
        break;
    case "/":
        answer= firstNumber / secondNumber;
        break;
     default :
        console.log("Error");
        alert("Error");
        break;
}
alert(`your answer is ${answer} and the first number was ${firstNumber} and the second one was ${secondNumber}`)
console.log(`your answer is ${answer} and the first number was ${firstNumber} and the second one was ${secondNumber}`);

const userName= prompt('please tell us your username');
const age= +prompt("please tell us your age");
if(age>=18 && age<21){
    console.log("you are allowed to join our website");
    alert("you are allowed to join our website");
}
else{
    console.log("get out! Right now!!!!!");
    alert("get out! Right now!!!!!");
};

let ageIn56Year= age+56;
alert(`Hi your age in 56 years later is ${ageIn56Year} and your username is ${userName}`);
console.log(`Hi your age in 56 years later is ${ageIn56Year} and your username is ${userName}`);
