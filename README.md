## JavaScript
### Intro 
- Sab software me syntax samajne ka way hota ha 
- Java Script ke case me salo tak ye software browser me chupa tha 
- log phele index.html ki file banate tha or script add karte tha phir js ki file execute karte tha
- to wo software salo tak hame browser me mila or easy accessible bhi nhi tha
- now today wo software nikal kar stand alone kardia 
- ab ham js ko file normal file ki taran use karsakte han
- **Node.js or Deno** basically environment ha js ko chalane kelia
- Code likh kar run karte han to wo analyze hota ha wo kam **node js** karta han 
### let
- let keyword is used to declare a variable in javascript
- new ecma script 6 (ES6) version of javascript
- **let me same name ka variable ham nhi banasakte**
- same variable ko value reassign karsakte han

                    let name2 = "Mohib Ali";
                    name2 = "Khan";
                    console.log(name2);

### var
- var me same name ka variable ham bana sakte han

                    var name1 = "Mohib";
                    var name1 = "Mohib Ali";
                    console.log(name1);

- var me same name ka variable ko ham reassign bhi kar sakte han

                    var name1 = "Mohib";
                    name1 = "Ali";
                    console.log(name1);

### Scope { } isko kaha jata ha
- Scope ka matlab hota hai: Variable kahan tak accessible (use) ho sakta hai.
- var  **global /function** scope hota hai matlab function ke andar declare kiya gaya variable usi function ke andar accessible hota hai
- let **block scope** hota hai

### Data types
- **"use strict"** is word ka matlab ha ke ab javascript code ko newer version me treat karege
- code me readability boht important hoti ha
- ecma script js ka standard ha ke kese likhna ha js ko

1. number 
2. bigint
3. string
4. boolean
5. null is a standalone value object
6. undefined value nhi di
7. symbol unique hota ha
8. object



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




# **Array Exercise Practice Question**
1. Create an array of 5 different fruit names and log it to the console
2. Square of Each Element of an array
3. Access the last element of an array using the `length` property.
4. Loop through an array using a `for` loop and display each element.
5. Loop through an array using `forEach()` and print values.
6. Add a new element to the end of an array using `push()`.
7. Remove the first element from an array using `shift()`.
8. Get the nth element of an array (e.g., the 3rd element).
9. Count the number of elements in an array and print the result.
10. Sort an array of strings in alphabetical order.
11. Sort an array of numbers in descending order.
12. Calculate the sum of all numbers in a numeric array.
13. Return the average of numbers in an array.
14. Check if an array contains a specific value and return true/false.
15. Merge two arrays into one larger array.
16. Count negative numbers in a numeric array and also remove negative number in an array
17. Remove duplicates from an array and return the new array.
18. Find the largest number in an array of numbers.
19. Filter Numbers Greater Than X
20. Create a 2D array (array of arrays) and access a nested element.
21. Count how many even and odd numbers are there in an array
22. Multiply Each Element by 2

## Array more Command topic
- So in this we create a object inside an array
1. Array = list of items
2. Object = details of one item

👉 Combine them = list of detailed items
- Array → multiple users
- Object → each user’s data

📚 Library example
- Array = shelf of books
- Object = one book (title, author, pages)



# JavaScript Assessment Tasks (Beginner → Intermediate)

- Task 1 — Student Grade Calculator
Create a program that:
1.	Stores student name and marks of 3 subjects
2.	Calculates total and average
3.	Displays grade using conditions
Grade Rules
-	90+ → A
-	75–89 → B
-	60–74 → C
-	40–59 → D
-	<40 → Fail
- Expected Output Example
Student: Ali
Total: 255
Average: 85
Grade: B
Concepts Tested:
•	Variables
•	Numbers
•	Functions
•	If conditions
_______________________________________
- Task 2 — Reverse String Tool
Write a function that:
-	Takes a string input
-	Returns the reversed string
Example:
Input: "JavaScript"
Output: "tpircSavaJ"
Bonus:
-	Check if the string is Palindrome
Concepts Tested:
-	Strings
-	Loops
-	Functions
________________________________________
Task 3 — Array Statistics
Given an array:
let numbers = [12, 45, 7, 23, 89, 34];
Create functions to:
1.	Find largest number
2.	Find smallest number
3.	Find sum of numbers
4.	Find average
Concepts Tested:
•	Arrays
•	Loops
•	Math
•	Functions
________________________________________
Task 4 — Student Object Manager
Create an object structure:
let student = {
name: "Ahmed",
age: 20,
subjects: ["Math", "Physics", "CS"]
}
Tasks:
1.	Add a new subject
2.	Remove a subject
3.	Print all subjects using loop
Concepts Tested:
•	Objects
•	Arrays
•	Iteration
________________________________________
Task 5 — Email Validator
Write a function using Regular Expression that validates email.
Valid:
test@gmail.com
hello123@yahoo.com
Invalid:
abc.com
@test.com
Concepts Tested:
•	RegExp
•	Functions
•	Strings
________________________________________
Task 6 — Unique Number Finder (Sets)
Given an array:
let numbers = [1,2,3,2,4,5,4,6];
Remove duplicates and output:
[1,2,3,4,5,6]
Concepts Tested:
•	Sets
•	Arrays
________________________________________
Task 7 — Shopping Cart System
Create a simple cart system using array of objects
Example:
let cart = [
{name:"Laptop", price:800},
{name:"Mouse", price:20},
{name:"Keyboard", price:50}
];
Tasks:
1.	Calculate total price
2.	Add a new product
3.	Remove a product
4.	Print all products
Concepts Tested:
•	Arrays
•	Objects
•	Functions
•	Loops
________________________________________
Task 8 — Date Difference Calculator
Write a function that:
•	Takes two dates
•	Calculates difference in days
Example:
Input:
2026-01-01
2026-01-10

Output:
9 days
Concepts Tested:
•	Dates
•	Math
•	Functions
________________________________________
Task 9 — Map Based User Directory
Create a Map to store users:
ID → User Name
Tasks:
1.	Add users
2.	Find user by ID
3.	Delete user
4.	Print all users
Concepts Tested:
•	Maps
•	Iterations
________________________________________
Task 10 — Mini Student Management System (Final Task)
Create a system that can:
1.	Add student
2.	Delete student
3.	
4.	Search student
5.	Display all students
Each student should contain:
name
age
course
marks
Bonus:
•	Sort students by marks
Concepts Tested:
•	Arrays
•	Objects
•	Functions
•	Loops
•	Conditions
•	Destructuring
________________________________________
Optional Challenge (Advanced Students)
Build a Number Guessing Game
Rules:
•	Random number between 1–100
•	User keeps guessing
•	Show hints:
Too High
Too Low
Correct
Concepts Tested:
•	Math.random()
•	Loops
•	Conditions
________________________________________
✅ Evaluation Criteria
Skill	Marks
Logic	30
Code Structure	20
Use of Functions	20
Use of ES6 Features	20
Clean Code	10
________________________________________
 
JavaScript Mini Project Assessment
Student Management System (Console Based)
Objective
Build a Student Management System using JavaScript that allows managing students and their marks.
The program should run in browser console or Node.js.
________________________________________
Data Structure
Each student should have:
{
id: 1,
name: "Ali",
age: 20,
course: "Web Development",
marks: [80, 75, 90],
email: "ali@test.com",
created_at: new Date()
}
Students should be stored in an array.
________________________________________
Features Students Must Implement
1. Add Student
Create a function:
addStudent(name, age, course, marks, email)
Requirements:
•	ID should auto increment
•	Email must be validated using RegExp
•	Store date using Date object
Example:
addStudent("Ali",20,"JS",[80,90,75],"ali@test.com")
________________________________________
2. Display All Students
Create function:
showStudents()
Output example:
ID: 1
Name: Ali
Course: JS
Average Marks: 81
Concepts tested:
•	Loops
•	Arrays
•	Functions
________________________________________
3. Calculate Student Grade
Create function:
calculateGrade(marks)
Rules:
Average	Grade
90+	A
75–89	B
60–74	C
40–59	D
<40	Fail
________________________________________
4. Search Student
Create function:
findStudentByName(name)
Should return the student object.
Concepts tested:
•	Iteration
•	Conditions
________________________________________
5. Delete Student
Create function:
deleteStudent(id)
Remove the student from array.
Concepts tested:
•	Arrays
•	indexOf / filter
________________________________________
6. Unique Course List (Set)
Extract all courses students are enrolled in.
Output example:
JS
Python
Laravel
Concepts tested:
•	Set
•	Iterations
________________________________________
7. Student Directory Using Map
Create a Map storing:
studentId → studentName
Functions:
addToDirectory(student)
getStudentNameById(id)
Concepts tested:
•	Map
•	Iteration
________________________________________
8. Highest Marks Student
Create function:
topStudent()
Return the student with highest average marks.
Concepts tested:
•	Arrays
•	Math
•	Loops
________________________________________
9. Destructuring
When displaying students use destructuring:
const {name, age, course} = student;
Concept tested:
•	ES6 destructuring
________________________________________
10. Email Validation (RegExp)
Students must validate email before adding:
Valid example:
abc@gmail.com
test123@yahoo.com
Invalid:
abc.com
@test.com
________________________________________
Expected Example Usage
addStudent("Ali",20,"JavaScript",[80,90,75],"ali@gmail.com");
addStudent("Sara",22,"Python",[85,88,92],"sara@gmail.com");

showStudents();

findStudentByName("Ali");

deleteStudent(1);

topStudent();
________________________________________
Bonus Tasks (Advanced Students)
Add these extra features:
Sort Students by Marks
sortStudentsByMarks()
________________________________________
Count Students per Course
Example output:
JS: 3
Python: 2
Laravel: 1
________________________________________
Age Filter
Return students older than 21.
getStudentsAboveAge(21)
________________________________________
Evaluation Criteria
Criteria	Marks
Logic	30
Code Organization	20
Functions Usage	15
Array/Object Usage	15
ES6 Usage	10
Clean Code	10
________________________________________