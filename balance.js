// require the other two modules
var lulz = require('./randomNum.js');
var weird = require('./convert.js');

// The first function export should return the result of
// the first module being passed into the second module.
// The second function export should return the text “Account balance: \n”.
exports.result = function() {
    var num = lulz.randomNum(100, 1000000);
    var finalAnswer = weird.conversion(num);
    return 'Account Balance: ' + finalAnswer;
}
