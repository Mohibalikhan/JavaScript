// Function to calculate grade
function calculateGrade(avg) {
  if (avg >= 90)  
    return "A";
  else if (avg >= 75) 
    return "B";
  else if (avg >= 60) 
    return "C";
  else if (avg >= 40) 
    return "D";
  else return "Fail";
}

let name ="Mohib";
let marks1 = 65;
let marks2 = 85;
let marks3 = 75;

let total = marks1 + marks2 + marks3;
let average = total / 3;

let grade = calculateGrade(average);

console.log("Student:", name);
console.log("Total:", total);
console.log("Average:", average);
console.log("Grade:", grade);