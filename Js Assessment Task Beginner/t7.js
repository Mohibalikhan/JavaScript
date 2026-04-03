let cart = [
{name:"Laptop", price:800},
{name:"Mouse", price:20},
{name:"Keyboard", price:50}
];

// console.log(cart);   //print full 
console.log(cart[0]);//print only first obj in array

//print only prices
// let prices = cart.map(obj=>obj.price);
// console.log(prices);


//Calculate total price
let total = 0;
for (let i = 0; i < cart.length; i++) {
  total += cart[i].price;
}
console.log("Total Price:", total);


// Add a new product
cart.push({name:"Watch", price:500});  // <-- push ke liye () use karte hain, [] nahi
console.log("After Adding Watch:", cart);


// Remove a product (for example, Mouse)
cart = cart.filter(item => item.name !== "Mouse");  // remove object by name
console.log("After Removing Mouse:", cart);


// Print all product names
console.log("All Products:");
cart.forEach(item => console.log(item.name));
