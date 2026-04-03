let numbers = [12, 45, 7, 23, 89, 34];

// find largest number
let max = Math.max(...numbers)
console.log("Largest Number:", max);

// Find Smallest number
let min = Math.min(...numbers)
console.log("Smallest Number:", min);

// Find sum
let sum = 0;
for (let i = 0; i<numbers.length; i++) {
  sum += numbers[i];
}
console.log("Sum:", sum);

// Find average
let avg = sum / numbers.length;
console.log("Average:", avg);

