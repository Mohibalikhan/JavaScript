// Function to reverse string
function reverseString(str) {
  let reversed = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }

  return reversed;
}

let input = "maham";
let output = reverseString(input);

console.log("Input:", input);
console.log("Output:", output);

function isPalindrome(word) {
    let j = word.length - 1
    for (let i = 0; i < word.length / 2; i++) {
        if (word[i] != word[j]) {
            return "Not a palindrome";
        }
        j--;
    }
    return "palindrome";
}

console.log(isPalindrome(input));
