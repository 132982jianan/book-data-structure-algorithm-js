var List = require("./List.js");

var names = new List();
names.append("Cynthia");
names.append("Raymond");
names.append("Barbara");

console.log(names.toString());

names.remove("Raymond");
console.log(names.toString());

/**
 [ 'Cynthia', 'Raymond', 'Barbara' ]
 [ 'Cynthia', 'Barbara' ]
 */

