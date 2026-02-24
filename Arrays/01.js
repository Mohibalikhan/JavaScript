// Are a variable which can hold more than one value
let classmarks = [90, 60, 40, 30, 50]

// Accessing the whole array
console.log(classmarks);

// Accessing through index
console.log(classmarks[0])

// Add new value to the array by using index
classmarks[5]= 40; 
console.log(classmarks[5]);

// Add new value to the array by using push method
classmarks.push(30); 
console.log(classmarks[6]);



// Array can also hold different data types values
let student_age = [16, 20, 23, null ]
console.log(student_age);

// length of the array which gives us how many elements are there in the array
console.log(student_age.length);



console.log(typeof classmarks); //array is a type of object in JavaScript
