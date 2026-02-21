// Create a function called calcDistance that calculates the distance between two unique elements
// Make sure to implement Stack principle (LIFO)

const Stack = require("../lib/Stack");

function calcDistance(stack, a, b) {
  // your code here
  const tempStack = new Stack();
  let count = 0;
  let counting = false;

  while (!stack.isEmpty()) {
    const removed = stack.pop();
    tempStack.push(removed);

    if (counting) {
      if (removed === a) {
        break;
      } else {
        count++;
      }
    } else {
      if (removed === b) {
        counting = true;
        count++;
      }
    }
    // console.log(tempStack);
  }

  while (!tempStack.isEmpty()) {
    const removed = tempStack.pop();
    stack.push(removed);
  }
  return count;
}

const students = new Stack();
students.push("John");
students.push("Joe");
students.push("Jane");
students.push("Jill");
students.push("Jim");

const distance = calcDistance(students, "Joe", "Jim");
console.log(distance); // 3
const distance2 = calcDistance(students, "Joe", "Jill");
console.log(distance2); // 2
