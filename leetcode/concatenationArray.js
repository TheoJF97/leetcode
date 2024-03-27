/* CONCATENATION ARRAY
Given an integer array nums of length n, you want to create an array, ans, of length 2n where 
ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n (0-indexed).

Specifically, ans is the concatenation of two nums arrays.
Return the array ans. 

Example 1:
Input: nums = [1,2,1]
Output: [1,2,1,1,2,1]
Explanation: The array ans is formed as follows:
- ans = [nums[0],nums[1],nums[2],nums[0],nums[1],nums[2]]
- ans = [1,2,1,1,2,1]

Example 2:
Input: nums = [1,3,2,1]
Output: [1,3,2,1,1,3,2,1]
Explanation: The array ans is formed as follows:
- ans = [nums[0],nums[1],nums[2],nums[3],nums[0],nums[1],nums[2],nums[3]]
- ans = [1,3,2,1,1,3,2,1]
*/

const test1 = [1, 2, 1];
const test2 = [1, 3, 2, 1];

const getConcatenation = (nums) => {
  let ans = [];
  let ansLength = nums.length * 2;

  for (let i = 0; i < ansLength; i++) {
    if (nums[i] === undefined) {
      ans.push(nums[i - nums.length]);
    } else {
      ans.push(nums[i]);
    }
  }
  return ans;
};

console.log(getConcatenation(test1));
console.log(getConcatenation(test2));

//====================================================================================

const getConcatenation_Spread = (nums) => {
  return [...nums, ...nums];
};

console.log(getConcatenation_Spread(test1));
console.log(getConcatenation_Spread(test2));
