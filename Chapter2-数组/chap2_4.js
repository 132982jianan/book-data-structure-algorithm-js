/**
 * 测试2个数组拼接
 * @type {string[]}
 */
var cis = ["Mike", "Clayton", "Terrill", "Danny", "Jennifer"];
var dmp = ["Raymond", "Cynthia", "Bryan", 1];

var it = cis.concat(dmp);
console.log(it);

//
it = dmp.concat(cis);
console.log(it);

/**
 [ 'Mike',
 'Clayton',
 'Terrill',
 'Danny',
 'Jennifer',
 'Raymond',
 'Cynthia',
 'Bryan',
 1 ]
 [ 'Raymond',
 'Cynthia',
 'Bryan',
 1,
 'Mike',
 'Clayton',
 'Terrill',
 'Danny',
 'Jennifer' ]
 */