// Task 21 - Count how many even and odd numbers are there in an array
let arr = [1, 2, 3, 4, 5,11,18];

let even = 0;
let odd = 0;
for (let i = 0 ; i<arr.length ; i++)
    if (arr[i] %2 === 0 ){
        even ++  
    }
    else if (arr[i] %2 != 0 )
     odd ++
    

console.log("Even numbers are: ",even);
console.log("Odd numbers are: ",odd);