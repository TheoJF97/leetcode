/* THE ACCOUTNANT
 * > Write Number in Expanded Form.
 * > You will be given a number and you will need to return it as a string in Expanded Form. For example:


    EXAMPLES:
    expandedForm(12); // Should return '10 + 2'
    expandedForm(42); // Should return '40 + 2'
    expandedForm(70304); // Should return '70000 + 300 + 4'
💡  NOTE: All numbers will be whole numbers greater than 0.

PSEUDO:
- Create a function called expandedForm that takes in an integer 
- convert num to string to array?
- depending on index add zeros ?
- concat
- return a string 
 */

const test1 = 12;
const test2 = 42;
const test3 = 70304;

const expandedForm = (number) => {
  // arrOfInts is an array of ints
  const arrOfInts = String(number)
    .split("")
    .map((number) => {
      return Number(number);
    });
  console.log("My Array: " + arrOfInts);

  /* ForLoop and Map goal: to get the correct amount of zeros corresponding to digits
  test3:
  7       0      3     0    4  
  Digits:
  5       4      3     2    1 
  Index: 
  0       1      2     3    4  
  *10000  *1000  *100  *10  *1
  */
  const digits = arrOfInts.length;
  const digitsMap = new Map();
  for (let i = digits; i > 0; i--) {
    digitsMap.set(i, Math.pow(10, i - 1));
  }
  console.log(digitsMap);

  // Goal: to multiply each element in arrOfInts with the values of the digitsMap
  // This creates an array of arrays
  const digitsArr = [...digitsMap.entries()];

  let expandedFormArr = [];

  for (let j = 0; j < arrOfInts.length; j++) {
    if (arrOfInts[j] === 0) {
      expandedFormArr.splice(j, 1);
    } else {
      expandedFormArr.push(arrOfInts[j] * digitsArr[j][1]);
    }
  }

  return expandedFormArr.join(" + ");
};

console.log(expandedForm(test1));
console.log(expandedForm(test2));
console.log(expandedForm(test3));
