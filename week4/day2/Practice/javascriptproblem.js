//node javascriptproblem.js

//Write a JavaScript program to compute the sum
//of the two given integers,
//If the sum is in the range 50..80
//return 65 other wise return 80

const sum = (one, two) => {
  return one + two >= 50 && one + two <= 80 ? 65 : 80;
};

let answer = sum(70, 10);

console.log(answer);

//one liner
const total = (one, two) => (one + two >= 50 && one + two <= 80 ? 65 : 80);
