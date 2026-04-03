let student = {
name: "Ahmed",
age: 20,
subjects: ["Math", "Physics", "CS"]
}

console.log(student.subjects);
// Add a new subject
student.subjects.push("Data Science")
console.log(student.subjects);

// Remove a subject
student.subjects.shift()
console.log(student.subjects);

for (let i =0;i< student.subjects.length;i++){
    console.log(student.subjects[i]);
    
}



