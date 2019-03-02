/**
 * 筛选满足某个条件的元素
 * @param num
 * @returns {boolean}
 */
function isEven(num) {
   return num % 2 == 0;
}

function isOdd(num) {
   return num % 2 != 0;
}

var nums = [];
for (var i = 0; i < 20; ++i) {
   nums[i] = i+1;
}
var evens = nums.filter(isEven);
console.log("Even numbers: ");
console.log(evens);

var odds = nums.filter(isOdd);
console.log("Odd numbers: ");
console.log(odds);

/**
 Even numbers:
 [ 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 ]
 Odd numbers:
 [ 1, 3, 5, 7, 9, 11, 13, 15, 17, 19 ]
 */