// ================== halloween ======================

// Question:
// It's Halloween! Kids are trick-or-treating and you're noticing that even within a group, certain kids always have more candy than others.

// Given an array of integers, representing how many candies each kid has, find out which kid has the most candies.

// After giving each kid the same amount of candies, which kids will have more than the kid with the most before you added to their loot.

// Return an array of booleans.

// ===================================================

const halloween = (kidsCandies) => {
  // Find the max value of the array
  const max = Math.max(...kidsCandies);

  // Find the average of the ints
  let sum = 0;
  for (let i = 0; i < kidsCandies.length; i++) {
    sum += kidsCandies[i];
  }
  const avg = sum / kidsCandies.length;
  console.log("Average:" + avg);

  // Add the avg value to each index
  const newKidsCandies = kidsCandies.map((x) => x + avg);
  console.log(kidsCandies);
  console.log(newKidsCandies);

  // if new value is larger than the biggest number of the old array
  const output = [];
  for (let j = 0; j < kidsCandies.length; j++) {
    if (newKidsCandies[j] > max) {
      // output true
      output.push(true);
    } // else output false
    else {
      output.push(false);
    }
  }
  return output;
};

// Input: array of int
const kidsCandies1 = [1, 2, 5, 6, 7, 3, 4];
// Expected output: array of bools: [false, false, true, true , true ,false, true]
console.log(halloween(kidsCandies1));
