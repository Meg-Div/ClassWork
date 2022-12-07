// node box.js

/*
Print a box
Write function printBox which is given a width and height
and prints a hollow box of those given dimensions.

printBox(6, 4)
 ---
|   |
 ---

*/

const printBox = (width, height) => {
  console.log("-".repeat(width));

  for (let i = 1; i <= height; i++) {
    console.log(`|${" ".repeat(width - 2)}|`);
  }

  console.log("-".repeat(width));
};

printBox(6, 4);
