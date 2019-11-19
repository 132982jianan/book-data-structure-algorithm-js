function createTwoDimArr(rowNum, colNum, initNum) {
    var ret = [];
    for(var i = 0; i < rowNum; i++){
        // 第一维度初始化
        var col = [];

        // 第二维度
        for(var j = 0; j < colNum; j++){
            col[j] = initNum;
        }

        ret[i] = col;
    }
    return ret;
}

var arr = createTwoDimArr(2,3,-1);
console.log(arr);

/**
 [ [ -1, -1, -1 ], [ -1, -1, -1 ] ]
 */