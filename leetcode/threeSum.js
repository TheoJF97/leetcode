/* THREE SUM
Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] 
such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
Notice that the solution set must not contain duplicate triplets.

Example 1:
Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation: 
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.

Example 2:
Input: nums = [0,1,1]
Output: []
Explanation: The only possible triplet does not sum up to 0.

Example 3:
Input: nums = [0,0,0]
Output: [[0,0,0]]
Explanation: The only possible triplet sums up to 0.
*/

const test1 = [-1, 0, 1, 2, -1, -4];
const test2 = [0, 1, 1];
const test3 = [0, 0, 0];

const threeSum = (numbers) => {
  numbers.sort((a, b) => a - b);
  const result = [];
  for (let i = 0; i < numbers.length - 2; i++) {
    if (i === 0 || (i > 0 && numbers[i] !== numbers[i - 1])) {
      let left = i + 1;
      let right = numbers.length - 1;
      const target = 0 - numbers[i];

      while (left < right) {
        const sum = numbers[left] + numbers[right];

        if (sum === target) {
          result.push([numbers[i], numbers[left], numbers[right]]);
          while (left < right && numbers[left] === numbers[left + 1]) left++;
          while (left < right && numbers[right] === numbers[right + 1]) right--;
          left++;
          right--;
        } else if (sum < target) {
          left++;
        } else {
          right--;
        }
      }
    }
  }
  return result;
};

console.log(threeSum(test1));
console.log(threeSum(test2));
console.log(threeSum(test3));
