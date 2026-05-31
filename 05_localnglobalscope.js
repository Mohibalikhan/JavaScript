
let a = 100;

if (true) { 
    // block ke andr mene sare variables declare kiye hain, toh wo block ke andr hi accessible honge, 
    // block ke bahar nahi honge matlab let or const ke case me, 
    // but var ke case me aise nahi hota, var ke case me wo block ke bahar bhi accessible hota hai, jo ke galat ha
    let a = 1;
    const b = 2;
    var c = 3;
    console.log("Inner a with let:",a);
}   

console.log(a); 
console.log(b); // ReferenceError: b is not defined, kyunki b block ke andr hi accessible hai, block ke bahar nahi hai
console.log(c);