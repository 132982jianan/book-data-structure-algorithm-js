var BST = require("./bst2.js");
var nums = new BST();
nums.insert(23);
nums.insert(45);
nums.insert(16);
nums.insert(37);
nums.insert(3);
nums.insert(99);
nums.insert(22);

var min = nums.getmin();
console.log("The minimum value of the BST is: " + min);

var max = nums.getmax();
console.log("The maximum value of the BST is: " + max);
