/* ================== mergeArrays =====================

Question: Given two arrays, write a function that will combine both arrays into one 
          by alternatly taking elements from each.

[a, b, c, d, e], [1, 2, 3, 4, 5] becomes  [a, 1, b, 2, c, 3, d, 4, e, 5]
[a, b, c, d, e], [1, 2, 3, 4, 5, 6, 7, 8] becomes [a, 1, b, 2, c, 3, d, 4, e, 5, 6, 7, 8]

PSEUDO:
- declare a function that takes 2 arrays
- declare a new output array 
- Push element 1 of arr1 in newArray, push element 1 of arr2 in newArray... until all elements pushed
- if one array is done but the other is not, push the rest of the array  
===================================================
*/

// Expected Output: [a, 1, b, 2, c, 3, d, 4, e, 5] = 10 elements
const arr1 = ["a", "b", "c", "d", "e"]; // 5 Elements
const arr2 = [1, 2, 3, 4, 5]; // 5 elements

// Expected output: [a, 1, b, 2, c, 3, d, 4, e, 5, 6, 7, 8] = 13 elements
const arr3 = [1, 2, 3, 4, 5, 6, 7, 8]; // 8 elements

/*
FOR LOOP Solution
*/
const mergeArrays_FL = (arrayOne, arrayTwo) => {
  let newArray = [];
  const maxArrayLength = Math.max(arrayOne.length, arrayTwo.length);

  for (let i = 0; i < maxArrayLength; i++) {
    newArray.push(arrayOne[i], arrayTwo[i]);
  }

  //   If any elements undefined, remove
  for (let j = 0; j < newArray.length; j++) {
    if (newArray[j] === undefined) {
      newArray.splice(j, 1);
    }
  }

  return newArray;
};

// console.log(mergeArrays_FL(arr1, arr2));
// console.log(mergeArrays_FL(arr1, arr3));

/*
FOR EACH Solution
*/
const mergeArrays_FE = (arrayOne, arrayTwo) => {
  let newArray = [];
  const maxArrayLength = Math.max(arrayOne.length, arrayTwo.length);

  for (let i = 0; i < maxArrayLength; i++) {
    newArray.push(arrayOne[i], arrayTwo[i]);
  }

  newArray.forEach((element) => {
    if (element === undefined) {
      newArray.splice(newArray.indexOf(element), 1);
    }
  });

  return newArray;
};

// console.log(mergeArrays_FE(arr1, arr2));
// console.log(mergeArrays_FE(arr1, arr3));

/*
FOR LOOP + IfElse Solution
*/
function MergeArrays_IE(a, b) {
  let arr = [];

  // If a's length > b's length, longer = a; else longer = b
  let longer = a.length > b.length ? a : b;
  console.log("Longer: " + longer);
  // If a's length > b's length, shorter = b; else shorter = a
  let shorter = a.length > b.length ? b : a;
  console.log("Shorter: " + shorter);

  for (let i = 0; i < longer.length; i++) {
    if (i < shorter.length) {
      arr.push(a[i], b[i]);
    } else {
      arr.push(longer[i]);
    }
  }

  return arr;
}

// console.log(MergeArrays_IE(arr1, arr2));
// console.log(MergeArrays_IE(arr1, arr3));

/*
While & Shift Solution
*/
function MergeArrays_WS(a, b) {
  const result = [];

  while (a.length || b.length) {
    if (a.length) result.push(a.shift());
    if (b.length) result.push(b.shift());
  }

  return result;
}

// console.log(MergeArrays_WS(arr1, arr2));
// console.log(MergeArrays_WS(arr1, arr3));
