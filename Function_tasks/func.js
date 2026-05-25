// What is Functions in javascript 

// console.log("Assalamualaikum"); //replace this with function


// function salam(name){
//   return "Assalamualaikum " + name;
// }
// console.log(salam("Mohib Ali"));



// // We create a function named called add which add two numbers
// function add(num1,num2){
//     return num1+num2;
// }
// console.log(add(5,90))

// // function define karte hoe jo value de jaye wo parameters kehlate hai 
// // jab hum function ko call karte hai to jo value hum function ke andar pass karte hai wo arguments kehlate hai
// // num1 and num2 are called parameters of the function add
// // 5 and 90 are called arguments of the function add 



// function sayHello() {
//   return "Hello World";
// }

// console.log(sayHello());


// // Arrow function 
// const addition = (a, b) => {
//   return a + b;
// };

// console.log(addition(5, 90));


// Function unique test cases
// for example hamare pass cart ka section han jisme hamare pas multiple items han to jitne items ayen 
// isko add kardo or return add to hame to nhi pata ke kitne items ayenge 
// so is case me ham rest parameter ka use karenge


// without rest function 
function cartitems(item1){
  return item1 ;
}
console.log(cartitems("Bread","Butter")); // this will work but what if we have more than 2 items



// with rest function
// they print all the number in the form of array 

// function cartitems(...items){
//   return items;
// }
// console.log(cartitems(5,10,15,20));



// // with rest function
// function cartitemsadd(...items){
//   return items.reduce((total, item) => total + item, 0) ;
// }
// console.log(cartitemsadd(5,10,15,20)); // this will work for any number of items because we are using rest parameter 



// // Function with object as parameter
// const user = {
//   name: "Mohib Ali",
//   age: 20,
// }

// function userInfo(anyobject){
//   console.log("Name: " + anyobject.name + ", Age: " + anyobject.age);
// }

// userInfo(user);


// // Function with array as parameter
// const numbers = [1, 2, 3, 4, 5];

// function printsecnumber(arr) {
//   console.log(arr[1]); // this will print the second number in the array
// }

// printsecnumber(numbers);  
