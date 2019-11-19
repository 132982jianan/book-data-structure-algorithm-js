var names = ["David", "Cynthia", "Raymond", "Clayton", "Jennifer"];

//
var name = "David";

var position = names.indexOf(name);

if (position >= 0) {
    console.log("Found " + name + " at position " + position);
} else {
    console.log(name + " not found in array.");
}

/**
 Found David at position 0
 */