// Generate random number between 1–100
// Check:
// Even or odd
// Greater than 50

let randomNo = Math.floor(Math.random() * 100) + 1
console.log(randomNo);


if (randomNo > 50 ){
    console.log("Number is greator than 50");
} 

if (randomNo%2 == 0){
    console.log("No is even");
    
}
else { console.log("No is odd");
}

