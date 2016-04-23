var Y = function (f) {
  return f(function(x) {
    return Y(f)(x);
  });
};

function almostFactorial (fact) {
  return function (n) {
    if (n === 0) {
      return 1;
    } else {
      return n * fact(n - 1);
    }
  };
}

function partFactorial (self) {
  return function (f) {
    return function (n) {
      if (n === 0) {
        return 1;
      } else {
        return n * f()(n - 1);
      }
    };
  }(function () { return self(self); });
}

var factorial = partFactorial(partFactorial);

console.log(factorial(10));
