var BST = require("./bst.js");

var nums = new BST();
nums.insert(23);
nums.insert(45);
nums.insert(16);
nums.insert(37);
nums.insert(3);
nums.insert(99);
nums.insert(22);

console.log("中序遍历=");
nums.inOrder(nums.root);

var num = parseInt(23);
nums.remove(num);
console.log("删除元素=", num);

console.log("中序遍历=");
nums.inOrder(nums.root);
