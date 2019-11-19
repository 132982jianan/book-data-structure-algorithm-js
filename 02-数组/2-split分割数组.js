var sentence = "the    quick brown fox jumped over the lazy dog";

// 字符串分割
var words = sentence.split(" ");

// 
for (var i = 0; i < words.length; ++i) {
    console.log("world ", i, " =", words[i]);
}

/**
 world  0  = the
 world  1  =
 world  2  =
 world  3  =
 world  4  = quick
 world  5  = brown
 world  6  = fox
 world  7  = jumped
 world  8  = over
 world  9  = the
 world  10  = lazy
 world  11  = dog
 */