const score = 100
console.log(score);


const balance = new Number(100)
console.log(balance);
console.log(balance.toString());

const num1 = 13400.123456789
console.log(num1.toFixed(2)); // point ke bad 2 digit show karega

const number = 86.767
console.log(number.toPrecision(3)); // total 3 digit show karega

const num2 = 1000000
console.log(num2);
console.log(num2.toLocaleString('en-pk'))

console.log(Math);
console.log(Math.abs(-5)); //ye hame negative number ko positive me convert kar deta hai
console.log(Math.round(4.6)); //ye hame number ko round off kar deta hai
console.log(Math.max(34, 56, 78, 12)); //ye hame maximum number dega


console.log(Math.random()); //ye hame 0 se 1 ke beech me random number dega

console.log(Math.floor(Math.random() * 10) +1); //ye hame 1 se 10 ke beech me random integer dega
