/* VALID PARENTHESES
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:
- Open brackets must be closed by the same type of brackets.
- Open brackets must be closed in the correct order.
- Every close bracket has a corresponding open bracket of the same type.
 

Example 1:
Input: s = "()"
Output: true

Example 2:
Input: s = "()[]{}"
Output: true

Example 3:
Input: s = "(]"
Output: false
*/

const test1 = "()";
const test2 = "()[]{}";
const test3 = "(]";

const validParentheses = (s) => {
  const stack = [];

  for (let char of s) {
    if (char === "(" || char === "{" || char === "[") {
      stack.push(char);
      console.log(stack);
    } else {
      if (stack.length === 0) return false;
      const top = stack.pop();
      if (
        (char === ")" && top !== "(") ||
        (char === "}" && top !== "{") ||
        (char === "]" && top !== "[")
      ) {
        return false;
      }
    }
  }

  return stack.length === 0;
};

console.log(validParentheses(test1));
console.log(validParentheses(test2));
console.log(validParentheses(test3));
