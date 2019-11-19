/**
 * 1) shift删除第一个元素
 */
var arr = [1,2,3,4,5];
console.log("\n原数组元素arr =", arr);
arr.shift();
console.log("\nshift删除第一个元素后arr =", arr);

/**
 * 2) unshift从头添加一组元素
 */
arr.unshift(-1, -2, -3);
console.log("\nunshift从arr前插入多个元素 =", arr);

/**
 * 3) pop从尾部删除元素，并返回这个值
 */
var item = arr.pop();
console.log("\npop从arr后边删除元素，并返回删除的这个值. 删除的item =", item, "\n删除后arr =", arr);

/**
 * 4) splice从index处(包括index)， 删除多个元素
 */
arr.splice(1, 3);
console.log("\nsplice删除3个元素arr =", arr);


/**
 * 5) splice从index之前添加元素
 */
arr.splice(1, 0, 1);
console.log("\nsplice添加1个元素arr =", arr);

/**
 * 6)数组从小到大排序
 */
arr = [3,2,1,4,5,3];
console.log("\n排序前 arr =", arr);

arr.sort(function (a, b) {
    return a - b;
});

console.log("\n排序后 arr =", arr);

/**
 原数组元素arr = [ 1, 2, 3, 4, 5 ]

 shift删除第一个元素后arr = [ 2, 3, 4, 5 ]

 unshift从arr前插入多个元素 = [ -1, -2, -3, 2, 3, 4, 5 ]

 pop从arr后边删除元素，并返回删除的这个值. 删除的item = 5
 删除后arr = [ -1, -2, -3, 2, 3, 4 ]

 splice删除3个元素arr = [ -1, 3, 4 ]

 splice添加1个元素arr = [ -1, 1, 3, 4 ]

 排序前 arr = [ 3, 2, 1, 4, 5, 3 ]

 排序后 arr = [ 1, 2, 3, 3, 4, 5 ]
 */