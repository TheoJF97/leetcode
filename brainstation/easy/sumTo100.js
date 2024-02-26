// What is the sum of all the whole numbers from 1 to 100 (inclusive)?

// THEO'S Solution:
const sumTo100 = () => {
  let sum = 0;
  for (let i = 0; i < 101; i++) {
    sum += i;
  }
  return sum;
};

console.log("Theo Solution: " + sumTo100());

// Solution - While Loop:
function sumTo100While() {
  let num = 0;
  let totalSum = 0;
  while (num <= 100) {
    totalSum += num;
    num++;
  }
  return totalSum;
}

console.log("While Solution: " + sumTo100While());

// Multiplier Solution
const sumToNum = (num) => {
  // 100 + 1 = 101
  let multiplier = num + 1;

  // (101/2) * 101
  return (num / 2) * multiplier;
};

console.log("Multiplier Solution: " + sumToNum(100));

// SumToNum2 Solution
const sumToNum2 = (num) => {
  // This creates an array from 1 to num
  Array.from({ length: num }, (_, i) => i + 1);
};
