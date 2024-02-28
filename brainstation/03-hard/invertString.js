// ================== invertString ======================

// Question:
// You are given a string of words, for each word within the string you need to turn the word 'inside out'. The internal letters will move out, and the external letters will move toward the centre. If the word is even in length, all letters will move. If the word in length is odd, you are expected to leave the 'middle' letter of the word where it is.

// ======================================================

// Solution:
function invertWord(word) {
  let isEven = word.length % 2 === 0;
  let newWord = [];
  let termsToMiddle = isEven ? word.length / 2 : (word.length - 1) / 2;

  word = word.split("");
  if (word.length <= 3) {
    return word.reverse().join("");
  }

  if (!isEven) {
    newWord.push(word[(word.length - 1) / 2]);
  }

  for (let i = 0; i < termsToMiddle; i++) {
    newWord.unshift(word.shift());
    newWord.push(word.pop());
  }

  return newWord.join("");
}
console.log(invertWord("tomorrow"));

function invertString(sentence) {
  return sentence
    .split(" ")
    .map((word) => invertWord(word))
    .join(" ");
}

console.log(invertString("tomorrow is a good day"));
console.log(invertString("the quick fox jumped over the lazy brown dog"));
