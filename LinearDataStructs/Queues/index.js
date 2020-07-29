const Queues = require("./Queues");

const Queue = require("./Queues");

const boundedQueue = new Queue(4);

boundedQueue.enqueue(1);
boundedQueue.enqueue(2);
boundedQueue.enqueue(3);
boundedQueue.enqueue(4);

boundedQueue.dequeue();
boundedQueue.dequeue();
boundedQueue.dequeue();
boundedQueue.dequeue();