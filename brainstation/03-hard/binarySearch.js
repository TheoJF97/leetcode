// Question: Given an array of integers that are sorted in ascending order and a target integer, write a function to search for the target within the array. If the target exists, then return its index, otherwise return -1.
// Do not use any array methods to accomplish this.
// Hint. Look into binary search.

const binarySearch = (arr, target) => {
  let start = 0;
  let end = arr.length - 1;
  console.log(arr[end]);
  while (start <= end) {
    // Math.floor rounds a decimal down
    let middle = Math.floor((start + end) / 2);
    // arr[middle] = 6; index 5
    if (arr[middle] < target) {
      // Search the right half
      start = middle + 1;
      console.log("start: " + start);
      console.log("middle: " + middle);
    } else if (arr[middle] > target) {
      // Search the left half
      end = middle - 1;
    } else if (arr[middle] === target) {
      return middle;
    }
  }
  // Target not found
  return -1;
};

// arrOfInts.length = 10
const arrOfInts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Expected Output: 9 is the index of 10
console.log(binarySearch(arrOfInts, 10));

// Expected Output: -1 because 10 DNE
console.log(binarySearch(arrOfInts, 11));
