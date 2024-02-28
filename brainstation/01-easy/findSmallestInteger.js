// ================== findSmallestInteger
// Question: Given an array of integers, find the smallest integer.

const findSmallestInt = (arr) => {
  return Math.min(...arr);
};

const arr1 = [4, 2, 1, 6, 8];

console.log("Smallest Int: " + findSmallestInt(arr1));
