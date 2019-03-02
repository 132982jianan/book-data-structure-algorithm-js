var CArray = require("./CArray.js");

var numElements = 100;
var nums = new CArray(numElements);

nums.setData();
var start = new Date().getTime();
console.log(nums.toString() + "\n");
nums.bubblesort();
var stop = new Date().getTime();
var elapsed = stop - start;
console.log(nums.toString());

console.log("Elapsed time for the bubble sort on " +
      numElements + " elements is: " + elapsed + " milliseconds.\n\n\n");

nums.setData();
start = new Date().getTime();
console.log(nums.toString() + "\n");
nums.selectionsort();
console.log(nums.toString());
stop = new Date().getTime();
elapsed = stop - start;
console.log("Elapsed time for the selection sort on " +
      numElements + " elements is: " +  elapsed + " milliseconds.\n\n\n");

nums.setData();
start = new Date().getTime();
console.log(nums.toString() + "\n");
nums.insertionsort();
console.log(nums.toString());
stop = new Date().getTime();
elapsed = stop - start;
console.log("Elapsed time for the insertion sort on " +
       numElements + " elements is: " + elapsed + " milliseconds.\n\n\n");