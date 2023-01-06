//node exercise.js

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

const jobAssignments = [
  { taskName: "fix github issue 1322", uid: 9 },
  { taskName: "fix github issue 5666", uid: 8 },
  { taskName: "fix frontend issue 123121", uid: 7 },
  { taskName: "fix vscode issue 992223", uid: 6 },
  { taskName: "fix html issue layout", uid: 5 },
  { taskName: "fix dc issue 1323122", uid: 4 },
  { taskName: "fix backend issue 2", uid: 3 },
  { taskName: "fix github issue 130022", uid: 2 },
  { taskName: "fix github issue 444", uid: 1 },
];

// const newStudentAssignemnts = [
//     {name: "jessika", uid: 1, taskName: "fix github issue 444", assignedTask: true},
// ]

const newStudentAssignments = [
  { name: "meg", uid: 3, taskName: "fix github issue", assignedTask: true },
];
//any method any function
//write a function that assigns the task to the student based on user id, return all the results in an array

const getAssignment = (students, jobAssignments) => {
  let newStudentAssignments = [];
  let nom = "";
  let uid = 0;
  let taskName = "";
  let assignedTask = false;

  for (let student of students) {
    obj = {};
    nom = student["name"];
    uid = student["uid"];
    idx = jobAssignments.findIndex((x) => x.uid === uid);
    taskName = jobAssignments[idx].taskName;
    assignedTask = true;
    obj.name = nom;
    obj.uid = uid;
    obj.taskName = taskName;
    obj.assignedTask = assignedTask;
    newStudentAssignments.push(obj);
  }

  console.log(newStudentAssignments);
};

getAssignment(students, jobAssignments);
