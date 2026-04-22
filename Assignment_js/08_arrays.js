/*
 Create array of 5 fruits
Tasks:
Add one fruit
Remove last fruit
Print all items using loop
*/

let fruits = ["Apple", "Banana", "Orange", "Mango", "Grapes"]

// Add one fruit in the begining
fruits.unshift("Pineapple")


fruits.pop()


for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

