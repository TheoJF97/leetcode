/* 
================== alternatingCase ======================

Question: Create a function that takes a string as a parameter and 
          alternates the casing of each individual letter within the string. 
          Eg. Hello World! => hELLO wORLD!

PSEUDO
declare a function that takes in a string 
declare empty str as output 
split str by '' 
loop through str, 
    if str is uppercase change to lowercase
    if str is lowercase change to uppercase 
return output 


==========================================================
 */

// Expected output: hELLO wORLD!
const hello = "Hello World!";
// Expected output: tHeOpHiLuS fIrTaNdi
const theo = "ThEoPhIlUs FiRtAnDI";

/*
FOR EACH Solution
*/

const alternatingCase_FE = (sentence) => {
  let output = "";
  const sentenceArray = sentence.split("");

  sentenceArray.forEach((word) => {
    wordArray = word.split("");
    wordArray.forEach((char) => {
      // if the character is uppercase, change to lowercase
      if (char === char.toUpperCase()) {
        output += char.toLowerCase();
      }
      // else, the char is lowercase so change to uppercase
      else {
        output += char.toUpperCase();
      }
    });
  });
  return output;
};

// console.log(alternatingCase_FE(hello));
// console.log(alternatingCase_FE(theo));

/*
FOR LOOP Solution
*/
const alternatingCase_FL = (string) => {
  let output = [];
  const letterArray = string.split("");

  for (let i = 0; i < letterArray.length; i++) {
    if (letterArray[i] === letterArray[i].toUpperCase()) {
      output.push(letterArray[i].toLowerCase());
    } else {
      output.push(letterArray[i].toUpperCase());
    }
  }
  return output.join("");
};

console.log(alternatingCase_FL(hello));
console.log(alternatingCase_FL(theo));

/*
Array Methods Solution
*/
function alternatingCase_Map(string) {
  string = string.split(" ");
  let newString = string.map((word) => {
    return word
      .split("")
      .map((letter, index) =>
        index % 2 === 0 ? letter.toLowerCase() : letter.toUpperCase()
      )
      .join("");
  });
  return newString.join(" ");
}

console.log(alternatingCase_Map(hello));
console.log(alternatingCase_Map(theo));
// Note: This solution not correct :(
// hElLo wOrLd! should be hELLO wORLD!
// tHeOpHiLuS fIrTaNdI should be tHeOpHiLuS fIrTaNdi
