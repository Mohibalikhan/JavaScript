// Dates ka start jan 1 1970 se hota hai
// Date is a built in object in JavaScript.
const now = new Date()
// console.log(now);
// console.log(now.toString());
// console.log(now.toDateString());
// console.log(now.toLocaleString());
// console.log(now.toLocaleDateString());

// let myCreatedDate = new Date(2023, 0, 23)
// console.log(myCreatedDate.toDateString());

// let myBirthdayDate = new Date("10-11-2003")
// console.log(myBirthdayDate.toDateString());

let newdate = new Date()
console.log(newdate);
console.log(newdate.getDay());


newdate.toLocaleString('default',
    { weekday: "long"

    })

