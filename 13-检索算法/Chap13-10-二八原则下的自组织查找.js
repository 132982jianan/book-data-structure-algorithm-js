function swap(arr, index1, index2) {
   var temp = arr[index1];
   arr[index1] = arr[index2];
   arr[index2] = temp;
}

function seqSearch(arr, data) {
   for (var i = 0; i < arr.length; ++i) {
      if (arr[i] == data && i > (arr.length * 0.2)) {
         swap(arr,i,0);
         return true;
      }
      else if (arr[i] == data) {
         return true;
      }
   }
   return false;
}

var nums = [];
for (var i = 0; i < 10; ++i) {
   nums[i] = Math.floor(Math.random() * 11);
}
console.log(nums);
var val = 5;
if (seqSearch(nums, val)) {
   console.log("Found element: ", val);
   console.log(nums);
} else {
   console.log(val + " is not in array.");
}

/**
 [ 5, 4, 1, 4, 9, 10, 6, 10, 5, 5 ]
 Found element:  5
 [ 5, 4, 1, 4, 9, 10, 6, 10, 5, 5 ]
 */
