// ================== removeFirstAndLast =====================

// Question:
// Create a function that removes the first and last characters of a word.

// ==========================================================

/* PSEUDO
Create a function which takes a word as an argument 

1. Split array, remove first and last
2. use substring to remove part
*/

const removeLetters = (word) => {
  let lettersArray = word.split("");
  lettersArray.pop();
  lettersArray.shift();
  return lettersArray.join("");
};

console.log(removeLetters("Theophilus"));
