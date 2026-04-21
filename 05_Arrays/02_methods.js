let cars= ["BMW", "Audi", "Mercedes", "Lexus", "Toyota"];

// length of the array
// console.log(cars.length);


// to access the last element of the array we can use length property
last_element =  cars[cars.length-1];
// console.log(last_element);


// to check if the array contains a specific value we can use includes method
// console.log(cars.includes("BMW"));


// to find the index of a specific value we can use indexOf method
// console.log(cars.indexOf("Mercedes"));


// to remove the last element of the array we can use pop method
cars.pop();
// console.log(cars);


// to add a new element at the end of the array we can use push method
cars.push("Honda");
// console.log(cars);


// to remove the first element of the array we can use shift method
cars.shift();
// console.log(cars);


// to add a new element at the beginning of the array we use unshift method
cars.unshift("Ford");
// console.log(cars);


// to reverse the order of the elements in the array we can use reverse method
cars.reverse();
// console.log(cars);


// to sort the elements in the array we can use sort method
cars.sort();
// console.log(cars);


// Converting an Array to a String
// console.log(cars.toString());


let marks = [90,30,20, 40, 10, 50];
// console.log(marks.sort());


let car_no = [114, 1100, 114, 1220,1100];
// console.log(car_no);
// console.log(car_no.sort());


// duplicate remove
let withoutDuplicates = [...new Set(car_no)];
// console.log(withoutDuplicates);

// Sorted array without duplicate
// console.log(withoutDuplicates.sort((a, b) => a - b));


const fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
// target	Kis index se copy paste shoro karna hai
// start	Kahan se copy start karni hai
// end	Kahan tak copy karni hai (end include nahi hota)
// array.copyWithin(target, start, end)
// fruits.copyWithin(2, 0, 2);
// console.log(fruits);


// This is orignial array
let mycars = ["BMW", "Audi", "Mercedes", "Lexus", "Toyota"];
console.log("Original Array",mycars);

// we use slice methods to extract a specific part of the array
// slice me original array change nahi hota hai
slicearr=mycars.slice(0, 3); // 0 se start hoga aur 3 se pehle tak jayega
console.log("slice",slicearr);
console.log("Original Array",mycars);


// we use splice method to add or remove elements from the array
// splice me original array change hota hai
let splicearr = mycars.splice(0,3); // 0 se start hoga aur 2 index tak delete karega elements 
console.log("splice",splicearr);
console.log("Original Array",mycars);
