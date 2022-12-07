//node PrintNumbers.js

/* 
Write a function printNumbers which is given a start number and an end number. 
It will print the numbers from one to the other, one per line:

printNumbers(1, 10)
1 ... 10
Write two versions of the above function. 
One using a while loop and the other using a for loop.
*/

//forEach loop
const printNumbers = (start, end) =>
  Array.from({ length: end - start }, (_, i) => start + 1 + i).forEach((elem) =>
    console.log(elem)
  );

const printNumbers2 = (start, end) => {
  do {
    console.log(start);
    start++;
  } while (start != end + 1);
};

printNumbers(1, 10);
printNumbers2(1, 10);
