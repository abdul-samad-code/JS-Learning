// ********   programe to find out whether user input is even or odd  ************


const promt = require("prompt-sync")();
let number = promt("Enter the number");
if(number%2==0){
    console.log("Number is even");    
} else if(number%2!=0){
    console.log("Number is odd");
}
