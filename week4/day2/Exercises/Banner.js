// node Banner.js

/*
Print a Banner
Write a function printBanner which is given 
some text and prints a banner with a border surrounding the text. 
The border has to stretch to the length of the text.

> printBanner('Welcome to DigitalCrafts')
----------------------------
- Welcome to DigitalCrafts -
----------------------------
*/

const printBanner = (text) => {
  console.log("-".repeat(`- ${text} -`.length));
  console.log(`- ${text} -`);
  console.log("-".repeat(`- ${text} -`.length));
};

printBanner("Welcome to DigitalCrafts");
printBanner("Welcome");
