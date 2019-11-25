function Queue() {
    this.dataStore = [];
    this.enqueue = enqueue;
    this.dequeue = dequeue;
    this.front = front;
    this.back = back;
    this.toString = toString;
    this.empty = empty;
}

function enqueue(element) {
    this.dataStore.push(element);
}

// function dequeue() {
//     return this.dataStore.shift();
// }

function front() {
    return this.dataStore[0];
}

function back() {
    return this.dataStore[this.dataStore.length - 1];
}

// function toString() {
//     var retStr = "";
//     for (var i = 0; i < this.dataStore.length; ++i) {
//         retStr += this.dataStore[i] + "\n";
//     }
//     return retStr;
// }

function empty() {
    if (this.dataStore.length == 0) {
        return true;
    } else {
        return false;
    }
}


function Patient(name, code) {
    this.name = name;
    this.code = code;
}

function dequeue() {
    var priority = this.dataStore[0].code;
    for (var i = 1; i < this.dataStore.length; ++i) {
        if (this.dataStore[i].code < priority) {
            priority = i;
        }
    }
    return this.dataStore.splice(priority, 1);
}

function toString() {
    var retStr = "";
    for (var i = 0; i < this.dataStore.length; ++i) {
        retStr += this.dataStore[i].name + " code: "
            + this.dataStore[i].code + "\n";
    }
    return retStr;
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
