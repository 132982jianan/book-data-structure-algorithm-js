/**
 * 数组部分元素某个条件
 * @param num
 * @returns {boolean}
 */
function isEven(num) {
   return num % 2 == 0;
}

var nums = [1,2,3,4,5,6,7,8,9,10];
var someEven = nums.some(isEven);
if (someEven) {
   console.log("some numbers are even");
} 
else {
   console.log("no numbers are even");
}

nums = [1,3,5,7,9];
var someEven = nums.some(isEven);
if (someEven) {
   console.log("some numbers are even");
} 
else {
   console.log("no numbers are even");
}

/**
 some numbers are even
 no numbers are even
 */