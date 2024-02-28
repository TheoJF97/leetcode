// ================== findMissingInteger ======================

// Question:
// Write a function that accepts an array of unique integers between 0 and 9 (inclusive),
// and returns the missing element.
// The array will always include 9 integers,
// with one integer between the numbers of 0 and 9 (inclusive) missing.

// ============================================================

const imperfectArr = [1, 4, 2, 3, 0, 5, 6, 8, 9];

const findMissingInt = (array) => {
  const perfectArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  // Sort array by increasing order
  array.sort();

  // Loop through and compare perfectArr to imperfectArr
  for (let i = 0; i < perfectArr.length; i++) {
    if (perfectArr[i] !== array[i]) {
      return perfectArr[i];
    }
  }
};

// Expected output: 7
console.log(findMissingInt(imperfectArr));
