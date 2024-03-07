let array1 = [1, 3, 5];
let array2 = [2, 4, 5];
let array3 = [2, 4, 6];

function itemInCommon(arr1, arr2) {
  let obj = {};
  for (let i = 0; i < arr1.length; i++) {
    // This sets the key of obj as each arr1 element; and the value of each key to true
    obj[arr1[i]] = true;
  }
  for (let j = 0; j < arr2.length; j++) {
    if (obj[arr2[j]]) return true;
  }
  return false;
}

console.log(itemInCommon(array1, array2));
console.log(itemInCommon(array1, array3));
