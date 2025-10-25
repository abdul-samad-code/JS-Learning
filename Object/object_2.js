
 // singleton
 // object literals

 const user = {
    name: "Absul Samad",
    age: 20,
    Email: "samad@gmail.com",
    isLogggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
 }


 console.log(user.Email);;
 console.log(user["Email"]);
 console.log(user);


 user.Email = "heikh@gmail.com"
//  Object.freeze(user);

user.greeting = function(){
    console.log("hello "+" ",this.name);
}

console.log(user);


 
 
 