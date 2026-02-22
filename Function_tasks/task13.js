// Create a function which check number guess
function checkGuess(secretNumber, guess){
    if(guess === secretNumber){
        return "Correct.";
    }else if(guess < secretNumber){
        return "Too low.";
    }else{
        return "Too high.";
    }

}
console.log(checkGuess(5,5))
