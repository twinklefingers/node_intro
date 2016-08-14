var http = require('http'); //where we are building server
// var num = require('./randomNum.js');
var balance = require('./balance');

http.createServer(function(req, res) { //calling method on http, request response
    res.writeHead(200); // request head
    res.write(balance.result());
    res.end(); //tell node we are done responding
}).listen(3000); // tell server what Port to listen to
console.log("Listening on Port 3000");


// Notes
// Nice job! Just one note that may help in the future:
// - We were looking for modules 1&2 to be exported only to
// module 3 and then module 3 would export out the combined
// functions to the app.js, where the module 3 function is
// called and written to the console. Please let me (casie)
// know if you have any questions or concerns regarding this
// feedback or assignment. Overall though, great work!
