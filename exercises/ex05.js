// Create a function called mixQueue that rearranges the queue so that the first half is interleaved/mixed with the second half
// For example: 1 2 3 4 5 6 becomes 1 4 2 5 3 6
// Make sure to implement the Queue principle (FIFO)

const Queue = require("../lib/Queue");

function mixQueue(queue) {
  // your code here
  const firstTempQueue = new Queue();
  const secondTempQueue = new Queue();

  while (!queue.isEmpty()) {
    const removed = queue.dequeue();
    const length = queue.size();
    const halfOfLength = length / 2;
    // console.log(halfOfLength);

    if (length !== null) {
      for (let i = 0; i < halfOfLength; i++) {
        firstTempQueue.enqueue(removed);
      }
      for (let i = halfOfLength; i < length; i++) {
        secondTempQueue.enqueue(removed);
      }
    }
  }

  while (!firstTempQueue.isEmpty() || !secondTempQueue.isEmpty()) {
    const removedFromFirst = firstTempQueue.dequeue();
    const removedFromSecond = secondTempQueue.dequeue();
    // const maxLength = Math.max(firstTempQueue.length, secondTempQueue.length);

    for (let i = 0; i < firstTempQueue.length; i++) {
      if (removedFromFirst !== null) {
        queue.enqueue(firstTempQueue[i]);
      }
      if (removedFromSecond !== null) {
        queue.enqueue(secondTempQueue[i]);
      }
    }
  }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
queue.enqueue(6);

mixQueue(queue);
console.log(queue.printQueue()); // Output: 1 4 2 5 3 6
