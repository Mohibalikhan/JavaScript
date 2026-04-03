// Write a function using Regular Expression that validates email.

function validateEmail(email) {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  
  return regex.test(email);
}


console.log(validateEmail("test@gmail.com"));       
console.log(validateEmail("hello123@yahoo.com"));   
console.log(validateEmail("abc.com"));            
console.log(validateEmail("@test.com"));  
console.log(validateEmail("khan@gmail.com"));