// Print student info in this format:
// Name: Ali
// Age: 20
// Courses: JS, HTML
// Add a new course
// Convert name to uppercase
// Show total number of courses
// Add a new course

let student = {
    name:"Ali",
    age: 20,
    courses: ["JS", "Html"],
}

console.log("Name:", student.name);
console.log("Age:",student.age);
console.log("Courses:",student.courses);
console.log("Total Courses:", student.courses.length);

student.courses.push("Tailwind Css");
console.log(student.courses);


// Convert name to uppercase
student.name = student.name.toUpperCase();
console.log(student.name);


// Show total number of courses
let totalCourses = student.courses.length;
console.log("Total Courses:", totalCourses);