// Create a function called insertAfterTarget that inserts a new element after a target element
// Make sure to implement the Stack principle (LIFO)

const Stack = require("../lib/Stack");

function insertAfterTarget(stack, target, newElement) {
  // your code here
  const tempStack = new Stack();

  while (!stack.isEmpty()) {
    const removed = stack.pop();

    if (removed === target) {
      tempStack.push(newElement);
    }
    tempStack.push(removed);
  }

  while (!tempStack.isEmpty()) {
    const removed = tempStack.pop();
    stack.push(removed);
  }
}

const stack = new Stack();
stack.push("A");
stack.push("B");
stack.push("C");
stack.push("D");

insertAfterTarget(stack, "B", "X");
console.log(stack.printStack()); // A B X C D
