var sentence = "the quick brown fox jumped over the lazy dog";

// 字符串分割
var words = sentence.split(" ");

// 
for (var i = 0; i < words.length; ++i) {
    print("word " + i + ": " + words[i]);
}