function seqSearch(arr, data) {
    for (var i = 0; i < arr.length; ++i) {
        if (arr[i] == data) {
            return i;
        }
    }
    return -1;
}

var words = "The nationalism of Hamilton was undemocratic was I".split(" ");
var word = "was";
var start = new Date().getTime();
var position = seqSearch(words, word);
var stop = new Date().getTime();
var elapsed = stop - start;
if (position >= 0) {
    console.log("Found " + word + " at position " + position + ".");
    console.log("Sequential search took " + elapsed + " milliseconds.");
} else {
    console.log(word + " is not in the file.");
}
