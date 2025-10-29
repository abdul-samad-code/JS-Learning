//******************************************  Function  **************************************

 function name(){
     console.log("samad");
    
 }
 name();

// *********************************************************************************

// function addTwoNumber(num1, num2) {
//     console.log(num1 + num2);
    
// }
function addTwoNumber(num1, num2) {                // parameters in the braces
     const result = num1 + num2;
     return result
    // return num1 + num2
}
const result = addTwoNumber(6, 8)                    // arguments or value in braces
 console.log("Result : ", result);

//********************************************************************************** */

function userMessage(username){
    return `${username} just logged in `
}
 console.log(userMessage("samad"));
 console.log(userMessage(""));                         // show blank space before message
 console.log(userMessage());                            // undefined before the messag
//************************************************************************************* */

function calculateCartPrice(...num){
    return num;
}
 console.log(calculateCartPrice(5454, 5454, 644645, 334, 54554));  // gives  num in a array

//***************************************************************************************** */

const user = {
    userName: "Abdul Samad",
    price: 199,                                                    // function with obj
}
function handleObj(anyObj){
    console.log(`User name is ${anyObj.userName} and price is ${anyObj.price}`);
    
}
 handleObj(user);
 handleObj({ userName: "Samad", price: 399});

//**************************************************************************************** */

const myArr = [100, 200, 300, 400,];
function firstValue(getArr) {
    return getArr[1];
}                                                               // function with array
console.log(firstValue(myArr));
console.log(firstValue([200, 5, 656, 54545, 65]));











