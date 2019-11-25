// 顺序查找
function seqSearch(arr, data) {
    for (var i = 0; i < arr.length; ++i) {
        if (arr[i] == data) {
            return true;
        }
    }
    return false;
}

function dispArr(arr) {
    for (var i = 0; i < arr.length; ++i) {
        console.log(arr[i] + " ");
        if (i % 10 == 9) {
            console.log("\n");
        }
    }
    if (i % 10 != 0) {
        console.log("\n");
    }
}

var nums = [];
for (var i = 0; i < 100; ++i) {
    nums[i] = Math.floor(Math.random() * 101);
}

var num = 5;

if (seqSearch(nums, num)) {
    console.log(num + " is in the array.");
} else {
    console.log(num + " is not in the array.");
}

dispArr(nums);
