//node square.js

/* 
Print a Square
Write a function printSquare which is given a size and prints a square of that size using asterisks.

printSquare(5)
---
---
---
---
---
*/

const printSquare = (size) => {
  console.log("*".repeat(size));

  for (let i = 1; i <= size; i++) {
    console.log(`*${" ".repeat(size - 2)}*`);
  }

  console.log("*".repeat(size));
};

printSquare(5);
printSquare(10);
