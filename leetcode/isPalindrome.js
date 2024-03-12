/* VALID PALINDROME
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and 
removing all non-alphanumeric characters, it reads the same forward and backward. 
Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise. 

Example 1:
Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
Example 2:

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.
Example 3:

Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.
*/

const test1 = "A man, a plan, a canal: Panama"; // true
const test2 = "race a car"; // false
const test3 = "RACE car"; // true
const test4 = " "; // true

/*
THEO'S SOLUTION
*/
const isPalindrome = (str) => {
  // convert all uppercase letters into lowercase letters
  const stringArray = str
    .replace(/[^A-Za-z0-9]/g, "")
    .toLowerCase()
    .split("");

  // return boolean if string is palindrome
  //    if strReversed (array of characters), reversed  === stringArray, return true
  let strReversed = [];

  for (let index = stringArray.length - 1; index >= 0; index--) {
    strReversed.push(stringArray[index]);
  }

  let output;

  if (strReversed.join("") === stringArray.join("")) {
    output = true;
  } else {
    output = false;
  }

  return output;
};

// console.log(isPalindrome(test1));
// console.log(isPalindrome(test2));
// console.log(isPalindrome(test3));
// console.log(isPalindrome(test4));

const isPalindrome_Harsh = (input) => {
  let nonAlphaString = input.replace(/[^A-Za-z0-9]/g, "");
  let lowerCase = nonAlphaString.toLowerCase();
  let charFromLast = lowerCase.length - 1;
  let result = true;

  for (let i = 0; i < lowerCase.length; i++) {
    if (lowerCase[i] !== lowerCase[charFromLast]) {
      result = false;
      break;
    }
    charFromLast--;
  }
  return result;
};

// console.log(isPalindrome_Harsh(test1));
// console.log(isPalindrome_Harsh(test2));
// console.log(isPalindrome_Harsh(test3));
// console.log(isPalindrome_Harsh(test4));

function isPalindrome_pointer(s) {
  // Convert the string to lowercase and remove non-alphanumeric characters
  s = s.toLowerCase().replace(/[^a-z0-9]/g, "");

  // Initialize two pointers, one at the start and one at the end of the string
  let left = 0;
  let right = s.length - 1;

  // Loop until the pointers meet or cross each other
  while (left < right) {
    // If characters at the two pointers are not equal, return false
    if (s[left] !== s[right]) {
      return false;
    }
    // Move the pointers inward
    left++;
    right--;
  }
  // If the loop completes without returning false, the string is a palindrome
  return true;
}

// Test cases
console.log(isPalindrome_pointer("A man, a plan, a canal: Panama")); // Output: true
console.log(isPalindrome_pointer("race a car")); // Output: false
console.log(isPalindrome_pointer(" ")); // Output: true
