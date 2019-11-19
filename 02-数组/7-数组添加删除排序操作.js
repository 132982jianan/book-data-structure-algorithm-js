// shift删除第一个元素,并返回
var arr = [1, 2, 3, 4, 5];
console.log("原数组元素arr=", arr, "\n");
arr.shift();
console.log("shift删除第一个元素后arr=", arr, "\n");

// unshift从头添加一组元素
arr.unshift(-1, -2, -3);
console.log("unshift从arr前插入多个元素后arr=", arr, "\n");

// pop从尾部删除元素，并返回这个值
var item = arr.pop();
console.log("pop从arr后边删除元素,并返回删除的这个值.删除的item=", item, "删除后arr=", arr, "\n");

// splice从index处(包括index),删除多个元素
arr.splice(1, 3);
console.log("splice删除3个元素arr=", arr);

// splice从index之前添加元素 param1:操作开始位置 param2:删除元素个数 param3:添加元素值
arr.splice(1, 1, 4);
console.log("splice添加1个元素arr=", arr, "\n");

// 数组从小到大排序
arr = [3, 2, 1, 4, 5, 3];
console.log("排序前 arr =", arr);

arr.sort(function (a, b) {
    return a - b;
});

console.log("排序后 arr =", arr, "\n");