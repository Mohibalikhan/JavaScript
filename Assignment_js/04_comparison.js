// Compare:
// "5" == 5
// "5" === 5
// null == undefined
// Write what each returns and explain why


console.log("5"==5); // they only check number not type
console.log("5"===5);// they check both number and type
console.log(null == undefined); // they are equal because both represent absence of value, but they are not strictly equal because they are different types (null is an object and undefined is a primitive type)