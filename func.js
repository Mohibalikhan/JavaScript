// What is Functions in javascript 

console.log("Assalamualaikum"); //replace this with function


function salam(name){
  return "Assalamualaikum " + name;
}
console.log(salam("Mohib Ali"));



// We create a function named called add which add two numbers
function add(num1,num2){
    return num1+num2;
}
console.log(add(5,90))


function sayHello() {
  return "Hello World";
}

console.log(sayHello());


function add(num1,num2){
    return num1+num2;
}
console.log(add(5,90))

// num1 and num2 are called parameters of the function add
// 5 and 90 are called arguments of the function add


// Arrow function 
const addition = (a, b) => {
  return a + b;
};

console.log(addition(5, 90));