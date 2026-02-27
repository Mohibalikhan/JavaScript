## JavaScript
### let
- let keyword is used to declare a variable in javascript
- new ecma script 6 (ES6) version of javascript
- let me same name ka variable ham nhi banasakte
- same variable ko value reassign karsakte han

                    let name2 = "Mohib Ali";
                    name2 = "Khan";
                    console.log(name2);

### var
- var me same name ka variable ham bana sakte han

                    var name1 = "Mohib";
                    var name1 = "Mohib Ali";
                    console.log(name1);

### Scope
- Scope ka matlab hota hai: Variable kahan tak accessible (use) ho sakta hai.
- var  **global /function** scope hota hai matlab function ke andar declare kiya gaya variable usi function ke andar accessible hota hai
- let **block scope** hota hai

### Object 
- We declare an object in two ways in js 
1. object literal 
2. object contructor
- Object values are access by using dot notation or square bracket notation 
- Object me Naya Data Add Karna 

                    let person = {
                    name: "Ali",
                    age: 20,
                    city: "Karachi"
                    };

                    person.gender = "Male";
                    
- Object me Data Update Karna 

                    person.age = 21;

- Object se Data Delete Karna 

                    delete person.city;

### Arrays 
- Are a variable which can hold more than one value
- Array values are access through index number
- Array can also hold different data types values
- length of the array which gives us how many elements are there in the array
- Add a new element in a array using index number or push method

### Arrays 📘 Methods Explained
1️⃣ length

Returns the number of elements in the array.

2️⃣ includes()

Checks if a value exists in the array.
Returns true or false.

3️⃣ indexOf()

Returns the index position of a specific value.

4️⃣ pop()

Removes the last element from the array.

5️⃣ push()

Adds a new element at the end of the array.

6️⃣ shift()

Removes the first element from the array.

7️⃣ unshift()

Adds a new element at the beginning.

8️⃣ reverse()

Reverses the array order.

9️⃣ sort()

Sorts the array elements (⚠ by default sorts as strings).

🔟 copyWithin() 

array ke andar hi elements copy karta hai
aur original array ko modify (change) karta hai.

                array.copyWithin(target, start, end)

| Parameter | Meaning                                          |
| --------- | ------------------------------------------------ |
| target    | Kis index se copy paste karna hai                |
| start     | Kahan se copy start karni hai                    |
| end       | Kahan tak copy karni hai (end include nahi hota) |


### Array and object difference

| Feature        | Arrays                    | Objects                                          |
| -------------- | ------------------------- | ------------------------------------------------ |
| Index Type     | Numbered indexes (0,1,2…) | Named keys (strings)                             |
| Data Structure | Ordered list              | Key–value pairs                                  |
| Best For       | Storing lists             | Representing real-world entities                 |
| Access Method  | `array[index]`            | `object.key` or `object["key"]`                  |
| Order          | Maintains order           | Order not guaranteed (generally insertion order) |
| Example        | `["Apple", "Banana"]`     | `{name: "Ali", age: 21}`                         |

🧠 Code Example Comparison

🔢 Array Example
                     
                     let colors = ["Red", "Green" "Blue"];
                     console.log(colors[0]); // Red
                    

🔢 Object Example

                    let user = {
                    name: "Ali",
                    age: 21
                    };                  
                    console.log(user.name); // Ali

- 📊 Data analysis me mostly arrays use hoti hain
- 🌐 Web apps me structured data ke liye objects use hote hain        