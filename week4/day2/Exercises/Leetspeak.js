// node Leetspeak.js

/*
Leetspeak
Write a function leetspeak which is given a string, 
and returns the leetspeak equivalent of the string.
To convert text to its leetspeak version, make the following substitutions:

A => 4 
E => 3 
G => 6 
I => 1 
O => 0 
S => 5 
T => 7

leetspeak('Leet')
l337
*/

const leetspeak = (str) => {
  return str
    .toLowerCase()
    .replaceAll("a", 4)
    .replaceAll("e", 3)
    .replaceAll("g", 6)
    .replaceAll("i", 1)
    .replaceAll("o", 0)
    .replaceAll("s", 5)
    .replaceAll("t", 7);
};

console.log(leetspeak("Leet"));
