// 3. Loop Through Object

const user = {
  username: "mohib123",
  email: "mohib@gmail.com",
  city: "Karachi"
};

// Task:
// for...in loop use karke saari keys aur values print karo
// (format: key: value)
for (let key in user) {
    console.log(key + ": " + user[key]);
}

// console.table(user);