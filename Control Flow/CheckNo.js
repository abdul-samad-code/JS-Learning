// ******************** check the number whether is positive, negative or zero **********************************



const promt = require("prompt-sync")();
let num = promt("Enter the digit");
if(num>0){
    console.log("Digit is positive");
} else if(num<0){
    console.log("Digit is negative");
} else{
    console.log("You enterd zero");
    
}