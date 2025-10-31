//**********************************   scope  ************************************ */

function one(){
    const userName = "Saamad";
    function two() {
        const website = "YouTube"
        console.log(userName);                       // we access parent fubction properties from inside the child function
    }
   // console.log(website);                         //  Error : not defined // can't access from outside           
   two();
    
}
one();



if (true){
    const user = "Abdul"
    if(user === "Abdul"){
        const website = "  instagram";
        console.log(user + website);
        console.log(user);
    }
    //console.log(website);                     // Error : not defined
} 
//console.log(user);                              // Error : not defined 


console.log(addOne(5));                             // hoisting in java Script
function addOne(num){
   return num + 1;
}



//addTwo(5);
const addTwo = function (nmu){
    return num + 2
}
