//write in a function that gives a sorted array of integers and a target integer. Use Binary search to find the index of the target. If not found return -1.

array = [0, 1, 21, 33, 45, 61, 71, 72, 73];
target = 1;

function binarySearch(array, target) {
  let low = 0;
  let middle = 0;
  let high = array.length - 1;

  while (low <= high) {
    middle = Math.floor((low + high) / 2);

    if (array[middle] > target) {
      high = middle - 1;
    } else if (array[middle] < target) {
      low = middle + 1;
    } else {
      return middle;
    }
  }

  return -1;
}

binarySearch(array, target);
