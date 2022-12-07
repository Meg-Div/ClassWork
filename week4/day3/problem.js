// node problem.js

const numbers = [1, 2, 3, 6, 9, 7, 3, 6, 9, 5, 0, 6, 34, 0, 0, 2, 0, 4, 0];
const num = [];
const obj = {};
const str = "";
const bool = true;
// in javascript
// remove all zeros
// sort the list in descending order
// at the very end, add your name to the end of the array
//as a string
// return that array
//code to stop loop if nothing is passed

function problem(arr) {
  //if the parameter is not an array or empty
  if (!Array.isArray(arr) || !arr.length) {
    console.log("Please enter a valid array");
    arr = 0;
  } else {
    //remove zeros, sort desc, and add "Meg"
    arr = arr.filter((num) => num !== 0).sort((a, b) => b - a);
    arr.push("Meg");
    console.log(arr);
  }
  return arr;
}

problem();
