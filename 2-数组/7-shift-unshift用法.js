var arr = [1,2,3,4,5];

console.log("\n原数组元素arr =", arr);

/**
 * 删除第一个元素
 */
arr.shift();

console.log("\nshift删除第一个元素后arr =", arr);

/**
 *
 */
arr.unshift(-1, -2, -3);
console.log("\nunshift从arr前插入多个元素 =", arr);

/**
 原数组元素arr = [ 1, 2, 3, 4, 5 ]

 shift删除第一个元素后arr = [ 2, 3, 4, 5 ]

 unshift从arr前插入多个元素 = [ -1, -2, -3, 2, 3, 4, 5 ]
 */