/**
 * 测试2个数组拼接
 * @type {string[]}
 */
var a1 = [1,2,3,4,5];
var a2 = ["a", "b", "c"];
var a3 = [7,8,9];
var a4 = 250;

/**
 *  1)数组与数组
 *  2)数组与单个数字都可以拼接到一起做成一个大的数组
 */
function concatArr() {
    var ret = [];
    for(var i = 0; i < arguments.length; i++){
        ret = ret.concat(arguments[i]);
    }
    return ret;
}

console.log(concatArr(a1, a2, a3, a4));

/**
 [ 1, 2, 3, 4, 5, 'a', 'b', 'c', 7, 8, 9, 250 ]
 */