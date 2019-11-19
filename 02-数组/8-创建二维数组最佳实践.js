/**
 *
 * @param row
 * @param col
 * @param initNum
 * @returns {Array}
 */
function createTwoDimArr(rowNum, colNum, initNum) {
    var ret = [];
    for(var i = 0; i < rowNum; i++){
        var col = [];
        for(var j = 0; j < colNum; j++){
            col[j] = initNum;
        }
        ret[i] = col;
    }
    return ret;
}

//
var arr = createTwoDimArr(2,3,-1);
console.log("\n测试初始数据 =", arr[0][1]);

/**
 测试初始数据 = -1
 */