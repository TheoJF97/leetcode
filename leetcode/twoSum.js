/* TWO SUM

Question: Given an array of ints, nums, and an integer, target, return indices of the two numbers such that they add up to target
Assume: Each input would have exactly one solution, and you may not use the same element twice 
*/
const arrInts1 = [2, 7, 11, 15];
const arrInts2 = [3, 2, 4];
const arrInts3 = [3, 3];

// O(n^2) Solution
const twoSum = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return [i, j];
      }
    }
  }
  return []; // No solution found
};

console.log(twoSum(arrInts1, 9)); // Output: [0,1];
console.log(twoSum(arrInts2, 6)); // Output: [1,2];
console.log(twoSum(arrInts3, 6)); // Output: [0,1];

// HASHMAP O(n) Solution
const twoSumHM = (arr, target) => {
  const numToIndex = new Map();
  for (let i = 0; i < arr.length; i++) {
    const complement = target - nums[i];
    if (numsToIndex.has(complement)) {
      return [numToIndex.get(complement), i];
    }
    numToIndex.set(nums[i], i);
  }
  return [];
};

console.log(twoSumHM(arrInts1, 9)); // Output: [0,1];
console.log(twoSumHM(arrInts2, 6)); // Output: [1,2];
console.log(twoSumHM(arrInts3, 6)); // Output: [0,1];
