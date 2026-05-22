// 4. Nested Object

const studinfo = {
  id: 53,
  details: {
    name: "Mohib Ali Khan",
    age: 21,
    },
    Faculty: {
        discipline: "Inforamation Technology",
        department: "Data Science",
        semester: 7
    },
    address: {
      city: "Mirpurkhas",
      zip: 69000
    }
  };

console.log(studinfo);

console.log("Name:", studinfo.details.name);
console.log("Department:", studinfo.Faculty.department);
console.log("Semester:", studinfo.Faculty.semester);
console.log("City:", studinfo.address.city);


