/**
 * 对于数组中每个元素执行一个函数
 * @param num
 */
function square(num) {
  console.log(num, num * num);
}

var nums = [];
for (var i = 0; i < 10; ++i) {
   nums[i] = i+1;
}

nums.forEach(square);

/**
 1 1
 2 4
 3 9
 4 16
 5 25
 6 36
 7 49
 8 64
 9 81
 10 100
 */