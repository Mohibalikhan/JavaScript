// Input: " javascript is fun "
// Output:
// Trim spaces
// Capitalize first letter
// Replace "fun" with "awesome"    

let input = " javascript is fun ";

let remove_space = input.trim(); // remove extra spaces
console.log(remove_space);

let capitalize = remove_space.charAt(0).toUpperCase() + remove_space.slice(1); // first isne capital kia phir concat kia slice ke sath
console.log(capitalize);

let replaced = capitalize.replace("fun", "awesome");
console.log(replaced);

