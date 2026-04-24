// Return the average of numbers in an array.
const arr = [10, 20, 30, 40];

console.log(arr.reverse());


function getAverage(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total / arr.length;
}

console.log("Average is:",getAverage(arr));

