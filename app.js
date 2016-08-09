var http = require('http'); //where we are building server
var num = require('./randomNum.js');
var balance = require('./balance.js');

http.createServer(function(req, res) { //calling method on http, request response
    res.writeHead(200); // request head
    res.write(balance.result());
    res.end(); //tell node we are done responding
}).listen(3000); // tell server what Port to listen to
console.log("Listening on Port 3000");
