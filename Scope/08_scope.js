//**************************************   Scope    **********************************************/



//****************************  global scope ************************************ */

// A variable declared outside of any function or block is said to have global scope

let name = "Abdul Samad"                      // global variable
function greet() {
   console.log("Hello",name);                 //  Acccessible inside function
}
//greet();
//console.log(name);                            // Also accessible outside



// **************************  Local Scope *************************************************************

//  A variable declared inside  a function or block (using let, const, or var) has local scope- meaning it can be used only within that function or block 


function showMessage() {
    let message = "hello from local scope";
    console.log(message);                         // Accessible here
}
showMessage();
console.log(message);                             // Error : message is not ddefined
