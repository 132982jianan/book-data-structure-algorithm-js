function findMin(arr) {
   var min = arr[0];
   for (var i = 1; i < arr.length; ++i) {
      if (arr[i] < min) {
         min = arr[i];
      }
   }
   return min;
}


var nums = [];
for (var i = 0; i < 100; ++i) {
   nums[i] = Math.floor(Math.random() * 101);
}
var minValue = findMin(nums);
console.log(nums);
console.log("The minimum value is: " + minValue);
