var List = require("./List.js");

function Customer(name, movie) {
   this.name = name;
   this.movie = movie;
}

function checkOut(name, movie, fileList, customerList){
   if(movieList.find(movie) > -1){
      var c = new Customer(name, movie);
      customerList.append(c);
      fileList.remove(movie);
   }else{
      console.log(movie + " is not available");
   }
}

var movies = ["cocos creator/Unity 3d", "node.js/pomelo/c++ lua", "express", "mysql/redis", "pm2"];

var movieList = new List();
var customers = new List();
var filmList = new List();

for (var i = 0; i < movies.length; ++i) {
   movieList.append(movies[i]);
}
console.log("Available movies: \n");
movieList.displayList();


checkOut("Jane Doe", "pm2", movieList, customers);

console.log("\nCustomer Rentals: \n");
console.log(customers.toString());

/**
 Available movies:

 cocos creator/Unity 3d
 node.js/pomelo/c++ lua
 express
 mysql/redis
 pm2

 Customer Rentals:

 [ Customer { name: 'Jane Doe', movie: 'pm2' } ]
 */