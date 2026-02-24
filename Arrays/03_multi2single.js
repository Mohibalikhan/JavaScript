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

