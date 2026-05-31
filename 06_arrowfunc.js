// In this we will learn about the arrow function and this in js
// this is used for the current object and it is used to access the properties of the object

const user = {
    name: 'Mohib',
    price:999,
    
    welcome: function(){
        console.log(`Welcome ${this.name} to the website`);
        // console.log(this);// current object full print
    }
}
// user.welcome();
// this.name = 'Rehman';// this block ke bahir access nhi hoga because this is used for the current object
// user.welcome(); // this will not change the name property of the user object

// user.name = 'Rehman';// this will change the name property of the user object to Rehman
// user.welcome();

// console.log(this);// this will print the Global Object (window) in the browser and in node it will print an empty object


//Now we will learn about the arrow function and this in js
// Arrow function does not have its own this keyword and it will take the this value from the surrounding scope

// syntax of arrow function
// const functionName = (parameters) => {}

// const add = (num1, num2) => {
//     return num1 + num2;
// }
// console.log(add(5, 10)); // this will print 15


// Now we will learn implicit return in arrow function
// const multiply = (num1, num2) => num1 * num2; // this is implicit return matlab me man leta hon apko batane ki zaroorat nhi 
// console.log(multiply(5, 10)); // this will print 50


// const add = (num1, num2) => (num1 + num2); // parenthesis is optional in this case but it is good practice to use it for better readability
// console.log(add(5, 10)); // this will print 15


// Now we will learn about the implicit return of an object in arrow function
// const add = (num1, num2) => ({username:"Mohib"}); // parenthesis is optional in this case but it is good practice to use it for better readability
// console.log(add(5, 10)); // this will print 15


// const myarray= [1, 2, 3, 4, 5];

// myarray.forEach((element) => {
//     console.log(element);
// }); // this will print each element of the array in a new line

const getUser = () => ({ username: "Mohib" });
console.log(getUser());