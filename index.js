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


