// ==================moveZeros=========================

// Question: Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

const moveZeros = (array) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 0) {
      // Splice: inserts at index i, replacing 1 element
      // Push: Adds the removed element to the end of the array
      array.push(array.splice(i, 1)[0]);
    }
  }
  return array;
};

const array1 = [0, 1, 2, 0, 3, 4, 0, 5];

// Expected Output: [1, 2, 3, 4, 5, 0, 0, 0]
console.log(moveZeros(array1));

// console.log(array1.push([0]))
