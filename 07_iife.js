function dbstart(){
    console.log("DB is started");
}
dbstart();

// IIFE stands for Immediately Invoked Function Expression
// IIFE is a function that is executed immediately after it is defined
// global scope ke pollution se bachne ke liye IIFE ka use kiya jata hai matlab pollution hatane kelia
// for example hamare pas ak file ha jisme hamare pas ak db ka connect function ha ham chahte han jese hi hamare app start ho to hamare db connect ho jaye
// to ham IIFE ka use kar sakte han taki hamare db connect function ko global scope me define na karna pade aur hamare app start hote hi db connect ho jaye

// syntax of IIFE
// (function(){
//     // code here
// })();

(function dbprocess(){
    console.log("DB is Processing");
})();

(function dbconnect(name){
    console.log(`DB is connected to ${name}`);
})("Mohib")

// dbprocess or dbconnect 2 iife function ak hi file me likh sakte han but important ye hai ke 
// first iife function ke bad me semicolon lagana zaroori hai taki 
// second iife function ke start hone se pehle first iife function ka end ho jaye aur dono iife function ke beech me koi confusion na ho;