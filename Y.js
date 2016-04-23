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

var factorial = Y(almostFactorial);

console.log(factorial(10));
