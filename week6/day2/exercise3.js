/*Write a program that prints the numbers from 1 to 100.
But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”.
For numbers which are multiples of both three and five print “FizzBuzz”.
*/

let newArr = [];

const fizzed = () => {
  for (let i = 1; i < 101; i++) {
    if (i % 15 === 0) {
      newArr.push("FizzBuzz");
    } else if (i % 5 === 0) {
      newArr.push("Buzz");
    } else if (i % 3 === 0) {
      newArr.push("Fizz");
    } else newArr.push(i);
  }
};

fizzed();

//conditionals with ternary

let array = [];

const fizzBuzz = () => {
  for (let i = 1; i < 101; i++) {
    i % 15 === 0
      ? array.push("FizzBuzz")
      : i % 5 === 0
      ? array.push("Buzz")
      : i % 3 === 0
      ? array.push("Fizz")
      : array.push(i);
  }
};

fizzBuzz();

//no conditionals

const isFB = (element) => element % 15 === 0;
const isB = (element) => element % 5 === 0;
const isF = (element) => element % 3 === 0;

let arr = Array.from(Array(101).keys());

arr.shift();

for (let elem of arr) {
  let fb = arr.findIndex(isFB);
  arr.splice(fb, 1, "FizzBuzz");

  let f = arr.findIndex(isF);
  arr.splice(f, 1, "Fizz");

  let b = arr.findIndex(isB);
  arr.splice(b, 1, "Buzz");
}

for (let i = 0; i < array.length; i++) {
  console.log(arr[i] === array[i]);
}
