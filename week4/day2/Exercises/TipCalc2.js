//node TipCalc2.js

/* 
Write a function totalAmount that takes the same arguments 
as tipAmount except it returns the total as the tip amount plus the bill amount. 
This function may make use of tipAmount as a sub-task.

totalAmount(100, 'good')
120
totalAmount(40, 'fair')
46
*/

const tipAmount = (bill, level) => {
  level === "good"
    ? (tip = 0.2)
    : level === "fair"
    ? (tip = 0.15)
    : level === "bad"
    ? (tip = 0.1)
    : tip;
  return bill + bill * tip;
};

console.log(tipAmount(100, "good"));
