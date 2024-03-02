/* ================== doubleUp ======================

Question: Given a string, you have to return a string in which each character (case-sensitive) is repeated once. 
"Hello World" => "HHeelloo  WWoorrlldd"

PSEUDO:
- declare a function that takes in a string and returns a string
-  
==================================================
*/

// Expected output: "HHeelloo  WWoorrlldd"
const hello = "Hello World";

/*
FOR EACH Solution 
*/
const doubleUp_FE = (string) => {
  let newString = [];
  string.split("").forEach((char) => {
    newString.push(char, char);
  });
  return newString.join("");
};

// console.log(doubleUp_FE(hello));

/*
FOR EACH Solution 
*/
const doubleUp_FL = (string) => {
  let newString = [];
  const stringArray = string.split("");

  for (let i = 0; i < stringArray.length; i++) {
    newString.push(stringArray[i], stringArray[i]);
  }
  return newString.join("");
};

// console.log(doubleUp_FL(hello));

/*
Map Solution
*/
const doubleUp_Map = (string) => {
  const stringArray = string.split("");
  let newString = stringArray.map((letter) => {
    return `${letter}${letter}`;
  });
  return newString.join("");
};

console.log(doubleUp_Map(hello));
