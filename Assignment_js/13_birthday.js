// Date Exercise
// Calculate:
// Your age using birth year
// Bonus: Show days left until next birthday

let currentdate = new Date()

// console.log("Current Date",currentdate.toLocaleDateString());

let currentyear = String(currentdate.getFullYear())
console.log("Current Year",currentyear);


let mybirthday = "2003"
console.log("Birth Year",mybirthday);

age = currentyear-mybirthday
console.log("My age",age);

let nextbirthday = new Date(currentyear, 9, 10); // October 10th
let timeDiff = nextbirthday.getTime() - currentdate.getTime();
let daysLeft = Math.ceil(timeDiff / (1000 * 3600 * 24));
console.log("Days left until next birthday:", daysLeft);

