var Queue = require("./Queue");

var q = new Queue();
q.enqueue("Meredith");
q.enqueue("Cynthia");
q.enqueue("Jennifer");
console.log(q.toString());

q.dequeue();
console.log(q.toString());

console.log("Front of queue: " + q.front());
console.log("Back of queue: " + q.back());

/**
 Meredith
 Cynthia
 Jennifer

 Cynthia
 Jennifer

 Front of queue: Cynthia
 Back of queue: Jennifer
 */
