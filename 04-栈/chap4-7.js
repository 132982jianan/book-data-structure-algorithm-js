var CArray = require("./CArray.js");

var numElements = 10;
var mynums = new CArray(numElements);
mynums.setData();

console.log(mynums.toString());

mynums.bubblesort();
console.log(mynums.toString());

/**
 6 7 5 8 5 3 1 8 3 8
 1 3 3 5 5 6 7 8 8 8
 */