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
  if (direction === "left") {
    const removedElements = array.splice(0, steps);
    for (let i = 0; i < steps; i++) {
      array.push(removedElements[i]);
    }
    return array;
  } else if (direction === "right") {
    const removedElements = array.splice(array.length - steps, array.length);

    for (let i = steps - 1; i > -1; i--) {
      array.unshift(removedElements[i]);
    }
    return array;
  } else "Provide valid direction: 'right' or 'left'";
};

// # of indices: 5
// Length: 6
const loopArray1 = [1, 5, 87, 45, 8, 7];

console.log("LEFT:", loopArray(loopArray1, "left", 2));
// should produce result: [87, 45, 8, 7, 1, 5]

console.log("RIGHT:", loopArray(loopArray1, "right", 2));
// should produce result: [8, 7, 1, 5, 87, 45]
