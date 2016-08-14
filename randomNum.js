// export a function that returns a random number
// When you call this module, use 100 as your min, and 1000000 as your max.

exports.randomNum = function(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
