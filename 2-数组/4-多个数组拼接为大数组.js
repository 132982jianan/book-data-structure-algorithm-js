/**
 * 测试2个数组拼接
 * @type {string[]}
 */
var a1 = [1,2,3,4,5];
var a2 = ["a", "b", "c"];
var a3 = [7,8,9];

function concatArr() {
    var ret = [];
    for(var i = 0; i < arguments.length; i++){
        ret = ret.concat(arguments[i]);
    }
    return ret;
}

console.log("\n多个数组的拼接", concatArr(a1, a2, a3));

/**
 多个数组的拼接 [ 1, 2, 3, 4, 5, 'a', 'b', 'c', 7, 8, 9 ]
 */