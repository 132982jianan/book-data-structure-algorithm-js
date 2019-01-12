/**
 * 检测一个数组中所有元素是否满足某个函数
 * @param num
 * @returns {boolean}
 */
function isEven(num) {
   return num % 2 == 0;
}

var nums = [2,4,6,8,10];

var even = nums.every(isEven);

if (even) {
   console.log("all numbers are even");
}
else {
   console.log("some numbers are odd");
}

/**
 all numbers are even
 */