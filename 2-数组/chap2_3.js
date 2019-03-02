var names = ["David", "Mike", "Cynthia", "Raymond", "Clayton", "Mike", "Jennifer"];

var name = "Mike";

var firstPos = names.indexOf(name);
console.log("First found " + name + " at position " + firstPos);

var lastPos = names.lastIndexOf(name);
console.log("Last found " + name + " at position " + lastPos);

/**
 First found Mike at position 1
 Last found Mike at position 5
 */