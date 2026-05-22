course = { 
    name: "Data Science",
    fee: 1000,
    duration: "3 months",
    instructor: "Mohib"
}

// this is the first methood to print
console.log("Course Name:", course.name);
console.log("Course Instructor:", course.instructor);   

// this is the second method
const {name, instructor : mentor} = course; // this is called destructuring assignment intructor ko mentor variable me store kar diya
console.log(mentor);