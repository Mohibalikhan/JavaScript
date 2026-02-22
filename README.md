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