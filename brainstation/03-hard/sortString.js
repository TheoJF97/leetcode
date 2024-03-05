/* ================== sortString ======================

Question: Create a function called 'sortString' that will sort a given string. 
            Each word in the string will contain a single number. 
            This number is the position the word should have in the result.
            Note: Numbers will only be from 1 to 9. So 1 will be the first word (not 0). 
            You will not get a sentence that has more than 9 words.
            If the input string is empty, return an empty string. 
            The words in the input String will only contain valid consecutive numbers.

Example: "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est”
Example: "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople”

PSEUDO:
- if sentence is empty string, return "empty string"
- let newSentence = []
- turn sentence (string) into an array of strings where each element is a word of the sentence
- forEach word, split by letter and grab the number 
- let that number be the index of the newSentence array 
- join then return 
====================================================
*/

// Expected output: "Thi1s is2 3a T4est”
const test1 = "is2 Thi1s T4est 3a";

// Expected output: "Fo1r the2 g3ood 4of th5e pe6ople”
const test2 = "4of Fo1r pe6ople g3ood th5e the2";

const sortString = (sentence) => {
  let orderedSentence = [];

  // if emptry string (which is falsy) is negated with ! (resulting in true), return empty string
  if (!sentence) {
    return "empty string";
  }

  const sentenceArray = sentence.split(" ");
  const sentenceMap = new Map();

  sentenceArray.forEach((word) => {
    // lettersArray is an array of characters representing each word
    let lettersArray = word.split("");

    let placement;

    for (let i = 0; i < lettersArray.length; i++) {
      if (parseInt(lettersArray[i])) {
        placement = parseInt(lettersArray[i]);
      }
    }

    sentenceMap.set(word, placement);
  });

  // Sort our object by numerical values
  const sentenceMapSorted = new Map(
    [...sentenceMap.entries()].sort((a, b) => a[1] - b[1])
  );

  // Array of arrays from our Map, sorted
  const newSentence = [...sentenceMapSorted.entries()];

  // Array of arrays
  newSentence.forEach((array) => {
    orderedSentence.push(array[0]);
  });

  return orderedSentence.join(" ");
};

// console.log(sortString(test1));
// console.log(sortString(test2));

/*
*/

const sortStringSolution = (sentence) => {
  let arr = sentence.split(" ");
  console.log(arr);
  let newString = [];

  arr.forEach((word) => {
    word.split("").forEach((char) => {
      if (!!Number(char)) {
        newString[char] = word;
        console.log(word);
      }
    });
  });

  return newString.join(" ");
};

console.log(sortStringSolution("4of Fo1r pe6ople g3ood th5e the2"));

