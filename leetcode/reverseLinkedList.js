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

APPROACH:
1. Initialize 3 pointers: previous, current, next node
2. Iterate through the linked list 
3. Inside loop, updated nextNode to store next node of curr
4. Update the next pointer of curr to point to prev 
5. Move prev to curr, and curr to nextNode 
6. Continue iterating until curr becomes NULL 
7. Return prev, which is the new head of the reversed list

DRY RUN 1ST EXAMPLE: head = [1,2,3,4,5]
Initially: prev = NULL, curr = head, nextNode = NULL.
Loop 1: nextNode = 2, curr->next = NULL, prev = 1, curr = 2.
Loop 2: nextNode = 3, curr->next = 1, prev = 2, curr = 3.
Loop 3: nextNode = 4, curr->next = 2, prev = 3, curr = 4.
Loop 4: nextNode = 5, curr->next = 3, prev = 4, curr = 5.
Loop 5: nextNode = NULL, curr->next = 4, prev = 5, curr = NULL.
Return prev as the new head: [5,4,3,2,1].
The linked list has been successfully reversed.
*/

const test1 = [1, 2, 3, 4, 5];
const test2 = [1, 2];
const test3 = [];

const reverseLinkedList = (head) => {
  let prev = null;
  let curr = head;
  let nextNode = null;

  while (curr != null) {
    nextNode = curr.next;
    curr.next = prev;
    prev = curr;
    curr = nextNode;
  }

  return prev;
};

console.log(reverseLinkedList(test1));
console.log(reverseLinkedList(test2));
console.log(reverseLinkedList(test3));
