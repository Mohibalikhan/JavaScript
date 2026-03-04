// Sort an array of numbers in descending order.


let numbers = [1,60,50,110,9,80]

console.log(numbers.sort()); // first number ke base per sort

// ascending order me
numbers.sort((a, b) => a - b);
console.log(numbers);


//descending order me
numbers.sort((a, b) => b - a);
console.log(numbers);
