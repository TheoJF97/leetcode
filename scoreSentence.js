// Given a string of words (sentence), you need to find the highest scoring word. 
// Each letter of a word scores points according to its position in the alphabet: 
// a = 1, b = 2, c = 3 etc. 
// You need to return the highest scoring word as a string. 
// If two words score the same, return the word that appears earliest in the original string. 
// All letters will be lowercase and all inputs will be valid.

const alphabetArray = 'abcdefghijklmnopqrstuvwxyz'.split('');
const alphabetMap = new Map();

// Create a map to store position of each letter 
alphabetArray.forEach((letter, index) => {
  alphabetMap.set(letter, index + 1);
});

// console.log(alphabetMap);

// create function to calc score for a word
// Word is an array of letters as strings 
const calculateScore = (word) => {
  return word.split('').reduce((score, letter) => {
    // console.log(`Score: ${score}`)
    // console.log(`letter: ${letter}`)
    
    return score + alphabetMap.get(letter);
  }, 0);
};

const highestScoringWord = (sentence) => {
  let highestScore = 0;
  let highestScoringWord = '';
  
  // Sentence becomes an array of words as strings 
  const arrayOfWords = sentence.split(' ');
  // console.log(arrayOfWords.forEach((word) => {console.log(word)}));
  
  // get score and highest word 
  arrayOfWords.forEach((word) => {
     const score = calculateScore(word);
     if (score > highestScore) {
       highestScore = score;
       highestScoringWord = word;
     }
  });
  
  return highestScoringWord;
}

// console.log(alphabet);
// Expected Output: jumps
console.log(highestScoringWord('the quick brown fox jumps over'));
