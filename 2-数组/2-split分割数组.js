var sentence = "the    quick brown fox jumped over the lazy dog";

// 字符串分割
var words = sentence.split(" ");

// 
for (var i = 0; i < words.length; ++i) {
    console.log("word " + i + ": " + words[i]);
}

/**
 word 0: the
 word 1:
 word 2:
 word 3:
 word 4: quick
 word 5: brown
 word 6: fox
 word 7: jumped
 word 8: over
 word 9: the
 word 10: lazy
 word 11: dog
 */