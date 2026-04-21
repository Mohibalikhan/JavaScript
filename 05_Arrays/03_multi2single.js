// concat(jise karna ha wo array ka name)
// They combine two array in a single array
// Combining Two Arrays using concat method

let class1ages = [10, 12, 15, 14];
let class2ages = [11, 13, 14, 15];
let allAges = class1ages.concat(class2ages);
console.log(allAges);


//sirf unique values ko sort karna hai toh Set ka use kar sakte hain
let uniqueAges = [...new Set(allAges)];
console.log(uniqueAges.sort());



// flat() nested arrays ko ek single array me convert karta hai.
const myArr = [[1,2],[3,6,10],[5,8,7]];
console.log(myArr);


// flat method se nested arrays ko ek single array me convert kar sakte hain.
const newArr = myArr.flat();
console.log(newArr);


// sort karo full array
newArr.sort((a,b) => a - b);
console.log(newArr);

(a, b) => a - b 
// ka matlab:
// Agar result negative ho → a pehle ayega
// Agar positive ho → b pehle ayega
// Is tarah numbers ascending order me sort ho jate hain


// Multi values ko single array me convert karne ke liye Array.of() method ka use kar sakte hain.
let a = 100
let b = 50
let c = 450

console.log(Array.of(a,b,c) );

