// const tinderuser = {} // this is a not a singleton object

const tinderuser = new Object() // this is a singleton object created using the Object constructor 

tinderuser.id="01",
tinderuser.name="Tester",
tinderuser.isLoggedIn=false

// console.log(tinderuser);


// In this we create a object using object literal and we can also create a nested object inside the main object
const regularuser = {
    email:"mohib@gmail.com",
    fullname : {
        userfullname:{
            firstname:"Mohib Ali",
            lastname:"Khan"
        },
    }
}
// console.log(regularuser);
// console.log(regularuser.fullname.userfullname.firstname);


const obj1 = {1 : "one", 2 : "two", 3 : "three"}
const obj2 = {4 : "four", 5 : "five", 6 : "six"}

// we can merge two objects using the spread operator
const mergedobj = {...obj1, ...obj2}
// console.log(mergedobj);

const obj3 = Object.assign({}, obj1, obj2) // we can also merge two objects using the Object.assign() method
// console.log(obj3);



//Database of users se data array of objects ke form me store karna chahiye taki hum usme se kisi bhi user ka data easily access kar sake
const users = [
    {    
        id:1,
        email:"test@gmail.com"
    },
    {    
        id:2,
        email:"test2@gmail.com"
    },
    {    
        id:3,
        email:"test3@gmail.com"
    }
]
// console.log(users[0]);

console.log(tinderuser);
console.log(Object.keys(tinderuser)); // this will return an array of keys of the object
console.log(Object.values(tinderuser)); // this will return an array of values of the object
console.log(Object.entries(tinderuser)); // this will return an array of key-value pairs of the object in the form of an array of arrays
console.log(tinderuser.hasOwnProperty("isLoggedIn")); // this will return a boolean value indicating whether the object has the specified property or not
console.log(tinderuser.hasOwnProperty("isLogged")); // this will return a boolean value indicating whether the object has the specified property or not


