// accept a number and convert it to a USD value.
var randomNum = require('./randomNum.js');

// convert randomNum into String
exports.conversion = function(num) {
    return '$' + num;
};


// module.exports = conversion;
// // OR MAYbe...
// // exports.conversion = function() {
// //     return '$' + randomNum() + '/n';
// // }
