// Create a function called isPalindrome that checks if the elements in the queue form a palindrome
// A palindrome reads the same forwards and backwards (e.g., 1 2 3 2 1)
// Make sure to implement the Queue principle (FIFO)

const Queue = require("../lib/Queue");
const Stack = require("../lib/Stack");

function isPalindrome(queue) {
  // your code here
  const tempQueue = new Queue();
  const stack = new Stack();
  let palindrome = false;

  while (!queue.isEmpty()) {
    const removed = queue.dequeue();
    tempQueue.enqueue(removed);
    stack.push(removed);
  }

  while (!tempQueue.isEmpty()) {
    const removedFromFront = tempQueue.dequeue();
    const removedFromBack = stack.pop();

    if (removedFromFront === removedFromBack) {
      palindrome = true;
    }

    queue.enqueue(removedFromFront);
  }

  return palindrome;
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(2);
queue.enqueue(1);

console.log(isPalindrome(queue)); // true
