// Student Data System
// •	Create array of students:
// [
//   { name: "Ali", marks: 80 },
//   { name: "Sara", marks: 45 },
// ]
// Tasks:
// Add new student
// Find average marks
// Print students who passed (>50)
// Convert names to uppercase


let stud_data = [
    { name: "Ali", marks: 80 },
    { name: "Sara", marks: 45 },
];


stud_data.push({ name: "Umer", marks: 50 });
console.table(stud_data);


let averageMarks = stud_data.reduce((total, student) => total + student.marks, 0) / stud_data.length;
console.log("Average Marks:", averageMarks);


let passedStudents = stud_data.filter(student => student.marks > 50);
console.log("Students who passed:", passedStudents);

let uppercaseNames = stud_data.map(student => ({ ...student, name: student.name.toUpperCase() }));
console.table(uppercaseNames);