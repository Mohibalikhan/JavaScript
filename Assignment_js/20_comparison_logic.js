// What will these return and why:
// [] == false
// [] === false
// "" == 0
// "" === 0


console.log([] == false); // true, because [] is converted to an empty string which is falsy
console.log([] === false); // false, because they are of different types (object vs boolean)
console.log("" == 0); // true, because "" is converted to 0
console.log("" === 0); // false, because they are of different types (string vs number)