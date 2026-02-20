// Function to calculate Factorial of a number
function factorial(n){
        if(n == 1){
            return n;
        }
        else{
             return n * factorial(n-1); //number ko uske chote number se mutiply karo recursively call
        }
    }

console.log(factorial(5))