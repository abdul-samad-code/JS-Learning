
//******************************** Objects  *********************************** */

// Object => object is  collection of related data (properties) and functions (methods)



let person = {
    name: "Abdul Samad",
    age: 20,
    isLoggedIn: false,
    greet: function() {
        console.log("hello my name is "+this.name);
        
    }
};

// Accesing obhects value in two ways
console.log(person.name);
console.log(person["age"]);


// calling methods
person.greet();               


// Adding new properties
person.contry = "India"
console.log(person);


// Deleting proprties
delete person.isLoggedIn;
console.log(person);

// LOpping trough an object 
//  for(let key in person){
//     log(key + ":", person[key]);
//  }


// nested obeject 
let student = {
    name: "Samad",
    address: {
        city: "lucknow",
        pin: 226028,
    }
};
 console.log(student);
 console.log(student.address.city);
 
 

 // Object methods    => JS provide built in method to wrk with object


 Object.keys(person);
 Object.values(person);
 Object.entries(person); 


 