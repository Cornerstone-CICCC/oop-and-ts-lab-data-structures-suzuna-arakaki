// Create a function called removeBetween that removes all elements between two unique elements
// Make sure to implement the Stack principle (LIFO)

const Stack = require("../lib/Stack");

function removeBetween(stack, a, b) {
  // your code here
  const tempStack = new Stack();
  let counting = false;

  while (!stack.isEmpty()) {
    const removed = stack.pop();
    if (counting) {
      if (removed === a) {
        tempStack.push(removed);
        break;
      } else {
      }
    } else {
      if (removed === b) {
        tempStack.push(removed);
        counting = true;
      } else {
        tempStack.push(removed);
      }
    }
  }

  while (!tempStack.isEmpty()) {
    const removed = tempStack.pop();
    stack.push(removed);
  }
}

const fruits = new Stack();
fruits.push("Apple");
fruits.push("Banana");
fruits.push("Cherry");
fruits.push("Date");
fruits.push("Elderberry");

removeBetween(fruits, "Banana", "Elderberry");
console.log(fruits.printStack()); // Apple Banana Elderberry
