// Remove duplicates from an array and return the new array.

const arr = [1,2,2,3,4,4,5];

removedupli = [...new Set(arr)];
console.log(removedupli); // They return a new array without duplicate

// console.log(... new Set (arr)); // they return number without duplicates