let cars= ["BMW", "Audi", "Mercedes", "Lexus", "Toyota"];

// length of the array
console.log(cars.length);

// to access the last element of the array we can use length property
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let fruit = fruits[fruits.length - 1];
// console.log(fruit);

// join method is used to join all the elements of the array into a string
console.log(cars.join(", "));

// to check if the array contains a specific value we can use includes method
console.log(cars.includes("BMW"));

// to find the index of a specific value we can use indexOf method
console.log(cars.indexOf("Mercedes"));

// to remove the last element of the array we can use pop method
cars.pop();
console.log(cars);

// to add a new element at the end of the array we can use push method
cars.push("Honda");
console.log(cars);

// to remove the first element of the array we can use shift method
cars.shift();
console.log(cars);

// to add a new element at the beginning of the array we can use unshift method
cars.unshift("Ford");
console.log(cars);

// to reverse the order of the elements in the array we can use reverse method
cars.reverse();
console.log(cars);

// to sort the elements in the array we can use sort method
cars.sort();
console.log(cars);

// Converting an Array to a String
console.log(cars.toString());

let marks = [90,30,20, 40, 10, 50];
console.log(marks.sort());

let class1ages = [10, 12, 15, 14, 13, 11];
let class2ages = [11, 13, 14, 12, 15, 10];
let allAges = class1ages.concat(class2ages);
console.log(allAges);

//sirf unique values ko sort karna hai toh Set ka use kar sakte hain
let uniqueAges = [...new Set(allAges)];
console.log(uniqueAges.sort());



const fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
// target	Kis index se copy paste shoro karna hai
// start	Kahan se copy start karni hai
// end	Kahan tak copy karni hai (end include nahi hota)
// array.copyWithin(target, start, end)

fruits.copyWithin(2, 0, 2);
console.log(fruits);


