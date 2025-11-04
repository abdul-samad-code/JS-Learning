// ****************  IMMIDIETLY INVOKE FUNCTION EXPRESSION  *************************



(function samad(){                          // for IIFE we wrapped function in () 
    console.log("DB Connected");            // Function with IIFE
})();                                       // use second pair of () to calling (invoke) the function

             // when we use two IIFE function , must use semi collon after function invoke



(() => {                                      
    console.log("2nd DB Connected")         // arrow function  with IIFE
}) ();      // semi collon must


(function () {
 let message = "samad!"                       // example
 console.log(`hello ${message}`);
})();   // semi collon must 


(function Samad(num){
    console.log("This is your arguments",+num+5);              //with parameters
})(8);        // semi collon must


((name) => {
   console.log("your name is : ",name);                       // with parameters in arrow => function
})("Abdul Samad");



 
