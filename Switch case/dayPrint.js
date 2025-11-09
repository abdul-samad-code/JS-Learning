const prompt = require("prompt-sync")();

console.log("Days with their Day number");
console.log("Monday   ----------> 1");
console.log("Tuesday  ----------> 2");
console.log("Wednesday ---------> 3");
console.log("Thursday  ---------> 4");
console.log("Friday   ----------> 5");
console.log("Saturday ----------> 6");
console.log("Sunday   ----------> 7");
console.log(" --------******-------");

let day = Number(prompt("Enter the Day Number (1–7): "));

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("You entered an invalid Day number!");
}
