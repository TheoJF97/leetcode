/* FizzBuzz
Given a nnumber n, for each integer i in the range from 1 to n inclusive, print one value per line as follows:
- If i is a multiple of both 3 and 5, print FizzBuzz
- If i is a multiple of 3 but not 5, print Fizz
- if i is a multiple of 5 but not 3, print Buzz
- if i is not a multiple of 3 or 5, print the value of i 

Example 1: n = 15; Expected Output:
1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
FizzBuzz
*/

const test1 = 3;
const test2 = 5;
const test3 = 15;
const test4 = 7;

const fizzBuzz = (n) => {
  for (let index = 1; index <= n; index++) {
    if (index % 3 === 0 && index % 5 === 0) {
      console.log("FizzBuzz");
    } else if (index % 3 === 0) {
      console.log("Fizz");
    } else if (index % 5 === 0) {
      console.log("Buzz");
    } else console.log(index);
  }
};

// console.log(fizzBuzz(test1));
// console.log(fizzBuzz(test2));
// console.log(fizzBuzz(test3));
// console.log(fizzBuzz(test4));
