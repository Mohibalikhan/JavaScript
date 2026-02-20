/*
console.log("Its my first program in javascript");
console.log("Its a 1st Ramzan today 19-02-2026");

// let keyword is used to declare a variable in javascript
// new ecma script 6 (ES6) version of javascript
let name = "Mohib";
console.log(name);


// var me same name ka variable ham bana sakte hai 
var name1 = "Mohib";
var name1 = "Mohib Ali";
console.log(name1);


//let me same name ka variable nahi bana sakte hai
// lekin same name ka variable ko overwrite kar sakte hai
let name2 = "Mohib Ali";
name2 = "Mohib";
console.log(name2);


// Scope ka matlab hota hai:
// Variable kahan tak accessible (use) ho sakta hai.
// var  global /function scope hota hai matlab function ke andar declare kiya gaya variable usi function ke andar accessible hota hai
// aur let block scope hota hai
function test() {
  var a = 10;
  console.log(a); // ✅ 10
}
test();

// Block ka matlab hota hai { } curly brackets ke andar wala area.
function test() {
  let a = 10;
  console.log(a); // ✅ 10
}
test();
*/


// String concatenation
firstname = "Mohib Ali"
lastname = "Khan"
fullname = firstname + " " + lastname
console.log(fullname);


// Javascript opearators
a = 10
b= 5
c= a+b
console.log(c); 
d = a-b
console.log(d); 
e = a*b 
console.log(e);