var BST = require("./bst.js");
var nums = new BST();
nums.insert(23);
nums.insert(45);
nums.insert(16);
nums.insert(37);
nums.insert(3);
nums.insert(99);
nums.insert(22);

nums.inOrder(nums.root);

var value = 16;
var found = nums.find(value);
if (found != null) {
    console.log("Found " + value + " in the BST.");
} else {
    console.log(value + " was not found in the BST.");
}
