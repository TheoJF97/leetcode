/* ITEM IN COMMON
Question: Compare 2 arrays that have integers; If both arrays have a common element, return true; else false

test 1 - expected output: true 
let array1 = [1, 3, 5]
let array2 = [2, 4, 5]

test 1 - expected output: false 
let array3 = [1, 3, 5]
let array4 = [2, 4, 6]
*/

/* PSEUDO
For each element in the array, run another for loop to check if the first element of arr1 equals an element in arr2 - if so return true, else false
*/
let array1 = [1, 3, 5];
let array2 = [2, 4, 5];
let array3 = [1, 3, 5];
let array4 = [2, 4, 6];
let array5 = [1, 2, 3, 4];
let array6 = [4, 5, 6];

const itemInCommon = (arr1, arr2) => {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        return true;
      }
    }
  }
  return false;
};

// Expected output: true
// console.log(itemInCommon(array1, array2));

// Expected output: false
// console.log(itemInCommon(array3, array4));

// Using an obj is a more efficient lookup to keep track of the items in the 1st array
function itemInCommonObj(arr1, arr2) {
  let obj = {};
  for (let i = 0; i < arr1.length; i++) {
    /*
    Doing the below creates a hash table where 
    each key is an item from arr1
    and the value of each key is true

    obj = {
    1: true
    3: true
    5: true
    }
    */

    obj[arr1[i]] = true;
    console.log(obj);
  }

  for (let j = 0; j < arr2.length; j++) {
    console.log(obj[arr2[j]]);
    if (obj[arr2[j]]) return true;
  }
  return false;
}

// Expected output: true
console.log(itemInCommonObj(array1, array2));

// Expected output: false
console.log(itemInCommonObj(array3, array4));

// Expected output: true
console.log(itemInCommonObj(array5, array6));

/* Why use an object?
1. Efficiency: Allows checking if an item exists in arr1 in constant time O(1) vs. linear time O(n)
2. Simplicity: Code is simple and straightforward, leveraging properties of objects for quick lookups 
*/
