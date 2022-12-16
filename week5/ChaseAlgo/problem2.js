//You are going to write a function that will take in a string of letters.
//You will have to return to me how many times each letter appears in the function.
//Please return all your results in an array.
//no order

//could use count function, but would have to run the loop multiple times.
//use multiple loops to count each instance
//create an object for each letter with the amount of times it appears
//return obj in array

//input: string
//return: array
const count = (str) => {
  obj = {};
  for (let letter of str) {
    if (obj[letter]) {
      obj[letter]++;
    } else {
      obj[letter] = 1;
    }
  }
  console.log([obj]);
};

count("Hello");
