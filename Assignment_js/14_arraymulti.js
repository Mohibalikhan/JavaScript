// Double each number
// Filter even numbers
// Find sum of all numbers
let nums = [1, 2, 3, 4, 5];
result = nums.map(num => num+num)
console.log(result);

even = nums.filter(num => num%2==0)
console.log(even);

// reduce array ko single no me convert krta ha acc running total ha aur num current element ha
plusno = nums.reduce((acc, num) => acc+num, 0)
console.log(plusno);
