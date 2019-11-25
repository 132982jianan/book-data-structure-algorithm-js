function swap(arr, index1, index2) {
   var temp = arr[index1];
   arr[index1] = arr[index2];
   arr[index2] = temp;
}

function seqSearch(arr, data) {
   for (var i = 0; i < arr.length; ++i) {
      if (arr[i] == data) {
         if (i > 0) {
            swap(arr,i,i-1);
         } 
         return true;
      }
   }
   return false;
}
