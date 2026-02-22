//  Object declare in javascript in two ways

// 1. Object literal syntax
// 2. Object constructor syntax
// Single ton ye apne tarah ka object banata hai contructor se jab bhi banega to singleton banega
// Object.create(person) // contructor method ke through or ise ke andar singeton banega


// object literal syntax
const person = {
    name: "Mohib",
    "full name": "Mohib Ali Khan", 
    age: 20,
    city: "Karachi",
    Offdays: ["Monday", "Tuesday"]
}

// console.log(person.name);//we access the value of the key name by using dot notation

// console.log(person["full name"]); // we use the square notation when we have space in the key name or special character in the key name
// console.log(person.age);

// console.log(person.Offdays); // Monday, Tuesday
// console.log(person.Offdays[0]); // Monday


// Interview ask create a symbol and use it as a key in an object
const id = Symbol("id");

const user = {
    name: "Mohib",
    [id]: "key1" // this is a symbol key, this is not a string key we use square brackets to use a symbol as a key in an object
}

console.log(user[id]);
console.log(typeof user[id]);


// Object values are access by using dot notation or square bracket notation
// object values are change by using dot notation
user.name = "Waqar Ali Junejo";
console.log(user.name);

// Object.freeze(user); // this will freeze the object and we cannot change the values of the object after freezing it
user.name = "Umer Khan";
console.log(user); // it will still print Waqar Ali Junejo because we cannot change the values of the object after freezing it


user.greeting= function() {
    console.log("Aoa Js User");
    
}
console.log(user.greeting());


user.greeting2= function() {
    console.log(`Kese ho Js User ${this.name}`);
    
}
console.log(user.greeting2());
