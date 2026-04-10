/*
console.log("Its my first program in javascript");
console.log("Its a 1st Ramzan today 19-02-2026");


// new ecma script 6 (ES6) version of javascript
let name = "Mohib";
console.log(name);


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
// console.log(fullname);




//  Data type conversion 
let age = "33a"
// console.log(typeof(age))
// console.log(age);

// // ab mujhe age wale string ko number me convert karna ha 
let valueInNumber = Number(age)
// console.log(typeof(valueInNumber))
// console.log(valueInNumber);

// but important bat ye ha ke agar ham uper wale age ke string ko change kare "33a"
// to type number ayege but console me NaN ayega 




// // Javascript opearators
// a = 10
// b= 5
// c= a+b
// console.log(c); 
// d = a-b
// console.log(d); 
// e = a*b 
// console.log(e);


// Tricks of mcqs 
// agar no phele ayega to phele plus hoga
// console.log(1+2);
// console.log("2"+2);
// console.log(2+"2");
// console.log(2+2+"2");
// console.log("2"+2+2);
// console.log(true);
// console.log(+true);
// console.log(+"");

// Tricky question
let counter = 100
counter++
console.log(counter);



// Comparison operators
console.log("2">1);
console.log("02">1);


console.log(null>0);
console.log(null==0);
console.log(null>=0);

