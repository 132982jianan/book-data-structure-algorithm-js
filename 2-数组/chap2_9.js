function passing(num) {
   return num >= 60;
}

var grades = [];
for (var i = 0; i < 20; ++i) {
   grades[i] = Math.floor(Math.random() * 101);
}

var passGrades = grades.filter(passing);

console.log(grades);
console.log(passGrades);

/**
 [ 62, 17, 71, 63, 55, 60, 90, 71, 27, 74, 72, 6, 36, 55, 25, 69, 59, 36, 100, 32 ]
 [ 62, 71, 63, 60, 90, 71, 74, 72, 69, 100 ]
 */