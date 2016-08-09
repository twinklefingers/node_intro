// export a function that returns a random number
// When you call this module, use 100 as your min, and 1000000 as your max.

exports.randomNum = function(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

// module.exports = randomNum(100, 1000000);
// // OR
// exports.randomNum = function() {
//     return randomNum(100, 1000000);
// }
