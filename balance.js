// require the other two modules
var ranNum = require('./randomNum');
var convert = require('./convert');

// The first function export should return the result of
// the first module being passed into the second module.
// The second function export should return the text “Account balance: \n”.
exports.result = function() {
    var num = ranNum.randomNum(100, 1000000);
    var finalAnswer = convert.conversion(num);
    return 'Account Balance: ' + finalAnswer;
}
