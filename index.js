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
  let str = "";

  // Convert number to string to array via typecasting
  // Note: this creates an array of strings that are numbers
  //   const intArr = Array.from(String(number));

  // Note: this creates an array of nums
  //   PSEUDO: count the digits
  //      if it's 2, multiply the first element by 10, multiply the second element by 1
  let myArr = String(number)
    .split("")
    .map((number) => {
      return Number(number);
    });
  console.log(myArr);

  const digits = myArr.length;
  console.log(digits);

  //   const test = myArr.map((digit) => digit.Math.floor());
  //   console.log(test);

  // If number is two digits
  const first = Math.floor(number / 10) * 10;

  return `${first} + ${myArr[1]}`;
};

// console.log(expandedForm(test1));
// console.log(expandedForm(test2));
console.log(expandedForm(test3));
