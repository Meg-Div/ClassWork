// function that takes in a non-empty array of integers that are not sorted and returns a new array of the same length with the squares of the original integers also sorted in ascending order

//numbers can be positive and negative, not always sorted

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const sorted = (array) => {
  return array.map((a) => a * a).sort((a, b) => a - b);
};

sorted(array);
