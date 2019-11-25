var Dictionary = require("./Dictionary.js");

var pbook = new Dictionary();

pbook.add("Raymond", "123");
pbook.add("David", "345");
pbook.add("Cynthia", "456");
pbook.add("Mike", "723");
pbook.add("Jennifer", "987");
pbook.add("Danny", "012");
pbook.add("Jonathan", "666");

pbook.showAll();

/**
 Cynthia -> 456
 Danny -> 012
 David -> 345
 Jennifer -> 987
 Jonathan -> 666
 Mike -> 723
 Raymond -> 123
 */
