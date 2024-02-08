/* Problem 2620. Counter
    Given an integer n, return a counter function. 
    This counter function initially returns n and then returns 1 more than the 
    previous value every subsequent time it is called (n, n + 1, n + 2, etc).
    */
function createCounter(n) {
  let counter = n; // Initialize the counter with the given value

  return function () {
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
};

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


// ================== loopArray ======================

// Question: Write a function loopArray that loops array in a specified direction by some number of steps.

// By "looping array" it means removing elements from start and adding them to end of array 
// one-by-one (if direction is "left") or removing from end and adding them to start one by-one (if direction is "right").

// Function should accept three arguments:
// array - non-empty array of elements of any type;
// direction - 'left' or 'right' - tells how to loop array;
// steps - number of steps to loop array (less or equal to array size);

// Examples:
// loopArray([1, 5, 87, 45, 8, 8], 'left', 2);
// should produce result: [87, 45, 8, 8, 1, 5]
// loopArray([1, 5, 87, 45, 8, 8], 'right', 2);
// should produce result: [8, 8, 1, 5, 87, 45]

// ========================================


const loopArray = (array, direction, steps) => {
  if (direction === 'left') {
      const removedElements = array.splice(0, steps);
      for (let i = 0; i < steps; i++) {
          array.push(removedElements[i]);
      }
      return array;
  } 
  
  else if (direction === 'right') {
      const removedElements = array.splice(array.length - steps, array.length);
      
      for (let i = steps-1; i > -1; i--) {
          array.unshift(removedElements[i]);
      }
      return array;
  } 
  
  else ("Provide valid direction: 'right' or 'left'")
}

// # of indices: 5
// Length: 6 
const loopArray1 = [1, 5, 87, 45, 8, 7]

console.log("LEFT:", loopArray(loopArray1, 'left', 2))
// should produce result: [87, 45, 8, 7, 1, 5]

console.log("RIGHT:", loopArray(loopArray1, 'right', 2))
// should produce result: [8, 7, 1, 5, 87, 45]

// ================== morseCode ======================

// Question: 
// The Morse code encodes every character as a sequence of "dots" and "dashes". For example, the letter A is coded as ·−, letter Q is coded as −−·−, and digit 1 is coded as ·−−−−. The Morse code is case-insensitive, traditionally capital letters are used. When the message is written in Morse code, a single space is used to separate the character codes and 3 spaces are used to separate words. 
// Using the dictionary provided, write a function to decode Morse code string. 
// Decode the following: '.... . -.--   .--- ..- -.. .'

// Morse Code Dictionary:
const MORSE_CODE = { 
  '-.-.--': '!',
  '.-..-.': '"',
  '...-..-': '$',
  '.-...': '&',
  '.----.': '\'',
  '-.--.': '(',
  '-.--.-': ')',
  '.-.-.': '+',
  '--..--': ',',
  '-....-': '-',
  '.-.-.-': '.',
  '-..-.': '/',
  '-----': '0',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '---...': ':',
  '-.-.-.': ';',
  '-...-': '=',
  '..--..': '?',
  '.--.-.': '@',
  '.-': 'A',
  '-...': 'B',
  '-.-.': 'C',
  '-..': 'D',
  '.': 'E',
  '..-.': 'F',
  '--.': 'G',
  '....': 'H',
  '..': 'I',
  '.---': 'J',
  '-.-': 'K',
  '.-..': 'L',
  '--': 'M',
  '-.': 'N',
  '---': 'O',
  '.--.': 'P',
  '--.-': 'Q',
  '.-.': 'R',
  '...': 'S',
  '-': 'T',
  '..-': 'U',
  '...-': 'V',
  '.--': 'W',
  '-..-': 'X',
  '-.--': 'Y',
  '--..': 'Z',
  '..--.-': '_'
}

// ===================================================

// Solution: 
function decodeMorse(morseCode) {
  let sentence = morseCode.split('   ');
  let newSentence = sentence.map(word => {
      word = word.split(' ');
      let newWord = word.map(item => {
          return MORSE_CODE[item];
      })
      return newWord.join('')
  })
  return newSentence.join(' ')
}

console.log(decodeMorse('.... . -.--   .--- ..- -.. .'))

// ==================moveZeros=========================

// Question: Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

const moveZeros = (array) => {
  for (let i = 0; i < array.length; i ++) {
      if (array[i] === 0) {
          // Splice: inserts at index i, replacing 1 element
          // Push: Adds the removed element to the end of the array 
          array.push(array.splice(i, 1)[0])
      }
  } return array;
}

const array1 = [0, 1, 2, 0, 3 , 4, 0, 5]

// Expected Output: [1, 2, 3, 4, 5, 0, 0, 0]
console.log(moveZeros(array1))

// console.log(array1.push([0]))


// ===========================================
