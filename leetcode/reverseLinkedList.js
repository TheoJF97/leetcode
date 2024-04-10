/* REVERSE LINKED LIST
Given the head of a singly linked list, reverse the list, 
and return reversed list

Example 1:
Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]

Example 2:
Input: head = [1,2]
Output: [2,1]

Example 3:
Input: head = []
Output: []
*/

const test1 = [1, 2, 3, 4, 5];
const test2 = [1, 2];
const test3 = [];

const reverseLinkedList = (head) => {
  let prev = null;
  let curr = head;
  while (curr != null) {
    let nextTemp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = nextTemp;
  }

  return prev;
};

console.log(reverseLinkedList(test1));
console.log(reverseLinkedList(test2));
console.log(reverseLinkedList(test3));
