console.log("Hello World");
console.log("Hello");

function functionName() {}

//JS separates each variable with a space

//Const cannot have a data type changed

//ES6
//fat arrow function:
const megiscool = (first, second) => {
  console.log(first, second);
};

megiscool("Meg", "Divringi");

//python returns NONE by default
//JS returns undefined by default

arr = [1, 2, 3];

const newarr = arr.filter((fruit) => fruit === 1);
console.log(newarr);

//for each
arr.forEach((fruit) => console.log(fruit));

const student = {
  name: "Meg",
  lastName: "Divringi",
};
//dot notation
console.log(student.name);
//bracket notation
console.log(student["name"]);

student.lastName = "Thielman";

console.log(student);

for (const key in student) {
  console.log(student[key]);
}

//Object.keys();
//Object.values();

for (let [key, value] of Object.entries(student)) {
  console.log(key);
}

//string interpolation
//console.log(`${teacher} is your teacher`)
