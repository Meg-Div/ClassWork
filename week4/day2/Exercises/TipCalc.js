//node TipCalc.js

/* Write a function tipAmount that is given the bill amount 
and the level of service (one of good, fair and poor) and returns the dollar amount for the tip. Based on:

good -> 20% fair -> 15% bad -> 10%

tipAmount(100, 'good')
20
tipAmount(40, 'fair')
6
*/

const tipAmount = (bill, level) => {
  level === "good"
    ? (tip = 0.2)
    : level === "fair"
    ? (tip = 0.15)
    : level === "bad"
    ? (tip = 0.1)
    : tip;
  return bill * tip;
};

console.log(tipAmount(100, "good"));
