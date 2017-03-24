function curry (f) {
  var self = this;
  var len = f.length;
  var args = [];
  var curried = function (a) {
    args.push(a)
    len -= 1;
    if (len === 0) {
      return f.apply(self, args);
    } else {
      return curried;
    }
  };
  return curried;
};

console.log(curry((a, b) => a + b)(1)(3));

module.exports = curry;

