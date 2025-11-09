const prompt = require("prompt-sync")();
let a = Number(prompt("Enter The First Number   : "));
let b = Number(prompt("Enter the Second Number  : "));
let op = prompt("Enter the Operator [+ - * /]   : ");
switch (op){
    case "+":
        console.log("Result : ",a+b);
        break;
    case "-":
        console.log("Result : ",a-b);
        break;
    case "*":
        console.log("Result : ",a*b);
        break;
    case "/":
        console.log("Result : ",a/b);
        break; 
    default:
        console.log("You chose Other operator");  
}