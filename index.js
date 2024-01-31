/* Problem 2620. Counter
    Given an integer n, return a counter function. 
    This counter function initially returns n and then returns 1 more than the 
    previous value every subsequent time it is called (n, n + 1, n + 2, etc).
    */
    function createCounter(n) {
        let counter = n; // Initialize the counter with the given value
    
        return function() {
        const currentValue = counter; // Store the current value
        counter++; // Increment the counter
        return currentValue; // Return the current value
        };
    }  
        // Test case 1
            const counter1 = createCounter(10);
            console.log([counter1(), counter1(), counter1()]); // Output: [10, 11, 12]  
        // Test case 2
            const counter2 = createCounter(-2);
            console.log([counter2(), counter2(), counter2(), counter2(), counter2()]); // Output: [-2, -1, 0, 1, 2]

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
}

// Expected output: 7
console.log(findMissingInt(imperfectArr));

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
  const avg = sum/(kidsCandies.length);
  console.log("Average:" + avg);

  // Add the avg value to each index
  const newKidsCandies = kidsCandies.map((x) => (x + avg));
  console.log(kidsCandies);
  console.log(newKidsCandies);
 
 // if new value is larger than the biggest number of the old array 
 const output = []
 for (let j = 0; j < kidsCandies.length; j++) {
     if (newKidsCandies[j] > max) {
      // output true
      output.push(true);
     } // else output false 
     else {
         output.push(false);
     }
 } return output;
}

// Input: array of int
const kidsCandies1 =  [1,2,5,6,7,3,4]
// Expected output: array of bools: [false, false, true, true , true ,false, true]
console.log(halloween(kidsCandies1));