var arr = [1,2,3,1];

function add(arr){
   var ret = 0;
   arr.forEach(function (v, i, a) {
      ret += v;
   });
   return ret;
}

console.log("精度到小数5位", (add(arr)/99).toFixed(5));

/**
 精度到小数5位 0.07071
 */