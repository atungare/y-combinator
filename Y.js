var Y = function (f) {
  return f(function(x) {
    return Y(f)(x);
  });
};

function almostFactorial (fact) {
  return function (n) {
    return (n === 0) ? 1 : (n * fact(n - 1));
  };
}

var workingFact = Y(almostFactorial)
console.log(workingFact(10));

function partFactorial (self) {
  function h (f) {
    return function (n) {
      return (n === 0) ? 1 : (n * f(n - 1));
    };
  }
  return function (x) { return h(self(self))(x); };
}

var factorial = partFactorial(partFactorial);

console.log(factorial(10));
