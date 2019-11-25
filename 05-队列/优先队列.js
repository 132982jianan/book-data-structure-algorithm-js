var Queue = require("./PriorityQueue");

function Patient(name, code) {
    this.name = name;
    this.code = code;
}


// 主程序
var p = new Patient("Smith", 5);

var ed = new Queue();
ed.enqueue(p);

p = new Patient("Jones", 4);
ed.enqueue(p);

p = new Patient("Fehrenbach", 6);
ed.enqueue(p);

p = new Patient("Brown", 1);
ed.enqueue(p);

p = new Patient("Ingram", 1);
ed.enqueue(p);

console.log(ed.toString());

var seen = ed.dequeue();
console.log("Patient being treated: " + seen[0].name);
console.log("Patients waiting to be seen: ")
console.log(ed.toString());

// 下一轮
var seen = ed.dequeue();
console.log("Patient being treated: " + seen[0].name);
console.log("Patients waiting to be seen: ")
console.log(ed.toString());

var seen = ed.dequeue();
console.log("Patient being treated: " + seen[0].name);
console.log("Patients waiting to be seen: ")
console.log(ed.toString());

/**
 Smith code: 5
 Jones code: 4
 Fehrenbach code: 6
 Brown code: 1
 Ingram code: 1

 Patient being treated: Jones
 Patients waiting to be seen:
 Smith code: 5
 Fehrenbach code: 6
 Brown code: 1
 Ingram code: 1

 Patient being treated: Ingram
 Patients waiting to be seen:
 Smith code: 5
 Fehrenbach code: 6
 Brown code: 1

 Patient being treated: Brown
 Patients waiting to be seen:
 Smith code: 5
 Fehrenbach code: 6
 */
