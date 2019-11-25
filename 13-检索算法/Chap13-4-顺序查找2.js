function seqSearch(arr, data) {
    for (var i = 0; i < arr.length; ++i) {
        if (arr[i] == data) {
            return i;
        }
    }
    return -1;
}

var nums = [];
for (var i = 0; i < 100; ++i) {
    nums[i] = Math.floor(Math.random() * 101);
}


var num = 5;

var position = seqSearch(nums, num);
if (position > -1) {
    console.log(num + " is in the array at position " + position);
} else {
    console.log(num + " is not in the array.");
}
console.log();
console.log(nums);
