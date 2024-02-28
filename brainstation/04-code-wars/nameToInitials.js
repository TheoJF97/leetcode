/*
Write a function to convert a name into initials.
Input: The argument will be a string of two words with one space between them.
Output: The output should be two capital letters with a dot separating them.
'michelle watson' => 'M.W'
"Harry Potter' => 'H.P.'
*/

// We'll write a function that takes two words of string as an argument separated by a space
// typeOf the argument which is being passed if it is a string go ahead, otherwise
// console.log('argument is not a valid string')
// we split the string to convert it into Array
// Map over array and return 2 letters which we'll change to upper case
// Once we have array of those two letters, we can do array[0] + "." + array[1]
// then return initials

const nameToIntials = (name) => {
  if (typeof name !== "string") {
    console.log("the argument inputed is not a string");
    return;
  }
  wordsArr = name.split(" ");
  const intialsArr = wordsArr.map((word) => word.substring(0, 1).toUpperCase());
  return `${intialsArr[0]}.${intialsArr[1]}.`;
};

console.log(nameToIntials(54));
console.log(nameToIntials("Harry Potter"));
