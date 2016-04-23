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
  return function (n) {
    if (n === 0) {
      return 1;
    } else {
      return n * (self(self)(n - 1));
    }
  };
}

var factorial = partFactorial(partFactorial);

console.log(factorial(10));
