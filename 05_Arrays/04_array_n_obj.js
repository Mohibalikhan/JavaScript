
let studprofile = [

    {name:"Mohib", age:22},
    {name:"Arshad",age:30},
    {name:"Ahmed", age:22}

]
console.log(studprofile);
console.log(typeof(studprofile));

// if we only excess first obj
console.log(studprofile[0]);

// if we only excess first obj and excess age value
console.log(studprofile[0].age);

// only extract ages with the help of map
let ages = studprofile.map(obj => obj.age);
console.log(ages); // [22, 30, 22]

