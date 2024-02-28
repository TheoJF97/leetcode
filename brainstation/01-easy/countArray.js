// ================== Count positives, Sum negatives ======================
// Given an array of integers, return an array where the first element is the count of positives numbers and the second element is sum of negative numbers.

// Input: [1, 2, 100, 165165, 51, -1, -1, -10]
// Output: [5, -12]
// ===================================================

const arrayCountPosSumNeg = [1, 2, 100, 165165, 51, -1, -1, -10];

const countPosSumNeg = (array) => {
  let counter = 0;
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 0) {
      counter++;
    } else {
      sum += array[i];
    }
  }
  return [counter, sum];
};

// Using forEach
const countPosSumNegFE = (array) => {
  let result = [0, 0];
  array.forEach((item) => {
    item > 0 ? result[0]++ : (result[1] += item);
  });
  return result;
};

// Using Reduce
const countPosSumNegR = (array) => {
  return array.reduce(
    (result, item) => {
      item > 0 ? result[0]++ : (result[1] += item);
      return result;
    },
    [0, 0]
  );
};

console.log(countPosSumNeg(arrayCountPosSumNeg));
