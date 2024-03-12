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
