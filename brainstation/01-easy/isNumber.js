/* ================== isNumber =====================
Question: Write a function that checks if all items in an array are numbers. Return a boolean. 

Input: [0, 1, 4, 6, 8]
Output: true

Input: [0, "yes", 0]
Output: false

for loop, linear search on array if all items are numbers 
================================================= */

const arr1 = [0, 1, 4, 6, 8];
const arr2 = [0, "yes", 0];

// Using for loop
const isNumberFL = (arr) => {
  let result = true;

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "number") {
      result = false;
    }
  }

  return result;
};

// console.log(isNumberFL(arr1));
// console.log(isNumberFL(arr2));

// Using forEach
function isNumberFE(arr) {
  let result = true;
  arr.forEach((number) => {
    if (typeof number !== "number") {
      result = false;
    }
  });
  return result;
}

// console.log(isNumberFE(arr1));
// console.log(isNumberFE(arr2));

// Using every
function isNumberEvery(arr) {
  return arr.every((number) => typeof number === "number");
}

// console.log(isNumberEvery(arr1));
// console.log(isNumberEvery(arr2));

// using find

const isNumberFind = (arr) => {
  return !arr.find((number) => typeof number !== "number");
};

console.log(isNumberFind(arr1));
console.log(isNumberFind(arr2));
