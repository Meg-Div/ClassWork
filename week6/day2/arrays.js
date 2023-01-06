const students = [
  { name: "jessika", uid: 1 },
  { name: "vinny", uid: 2 },
  { name: "meg", uid: 3 },
  { name: "jaye", uid: 4 },
  { name: "corey", uid: 5 },
  { name: "adam", uid: 6 },
  { name: "rokhaya", uid: 7 },
  { name: "peter", uid: 8 },
  { name: "mauro", uid: 9 },
];

const newStudents = students.map((student) => {
  let newStudent = student;
  newStudent.name = "new person";
  return newStudent;
});

//for each doesn't return anything
//map, need to return something in an array
