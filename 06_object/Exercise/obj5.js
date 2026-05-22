// 5. Object + Function (Real Thinking)

const marks = {
  math: 80,
  english: 70,
  science: 90
};

// Task:

// ek function likho jo:
// object ko input le
// total marks calculate kare
// average return kare

function calculateAverage(marks) {
    let total = 0;
    let count = 0;  
    for (let subject in marks) {
        total += marks[subject];
        count++;
    }   
    return total / count;
}

const averageMarks = calculateAverage(marks);
console.log("Average Marks:", averageMarks);