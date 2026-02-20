// Function check is palindrome or not 
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

console.log(isPalindrome("maham"));
