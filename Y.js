var freeY = function (f) {
  return f(function(x) {
    return freeY(f)(x);
  });
};

function almostFactorial (fact) {
  return function (n) {
    return (n === 0) ? 1 : (n * fact(n - 1));
  };
}

var workingFact = freeY(almostFactorial)
console.log(workingFact(10));

function partFactorial (self) {
  var h = almostFactorial;
  return function (x) { return h(self(self))(x); };
}

var somewhatFact = partFactorial(partFactorial);
console.log(somewhatFact(10));

var Y = function (f) {
  var g = function (h) {
    return function () {
      return f(h(h)).apply(null, arguments)
    };
  };

  return g(g);
};

var factorial = Y(almostFactorial);
console.log(factorial(10));

function almostReduce (red) {
  return function (arr, fn, init) {
    if (arr.length === 0) {
      return init;
    }

    let item = arr.pop()
    let acc = red(arr, fn, init);

    return fn(acc, item)
  }
}

var reduceArr = Y(almostReduce);

console.log(reduceArr([1,2,3], (a, i) => a + i, 0));






