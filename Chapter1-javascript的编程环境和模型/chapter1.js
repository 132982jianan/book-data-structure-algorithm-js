function Person(first, middle, last) {
    this.first = first;
    this.middle = middle;
    this.last = last;
    this.initials = initials;
}

function initials() {
    return this.first[0] + this.middle[0] + this.last[0];
}

var aPerson = new Person("John", "Quincy", "Public");
console.log("First name: " + aPerson.first);
console.log("Middle name: " + aPerson.middle);
console.log("Last name: " + aPerson.last);
console.log("Initials: " + aPerson.initials());