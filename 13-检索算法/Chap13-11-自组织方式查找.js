function swap(arr, index1, index2) {
    var temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}

function seqSearch(arr, data) {
    for (var i = 0; i < arr.length; ++i) {
        if (arr[i] == data) {
            if (i > 0) {
                swap(arr, i, i - 1);
            }
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
    console.log("Found element: ");
    console.log(nums);
} else {
    console.log(val + " is not in array.");
}

/**
 [ 6, 9, 4, 10, 4, 8, 9, 9, 6, 8 ]
 5 is not in array.
 */
