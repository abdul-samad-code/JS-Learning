// ******************* Lasgest of two ******************************


const prompt = require("prompt-sync")();
let num1 = Number(prompt("Enter the first Nummber : "));
let num2 = Number(prompt("Enter the second Number : "));

if(num1>num2){
    console.log("First number is Large");
} else if(num1<num2){
    console.log("Second number is Large");
}