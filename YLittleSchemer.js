// From chapter 9 of the Little Schemer -- "And again, and again, and again"

// elem :: string
// list :: array of numbers and strings
function looking (elem, list) {
  return keepLooking(elem, 0, list);
}

function keepLooking (elem, index_or_value, list) {
  if (typeof index_or_value === 'string') {
    return elem === index_or_value;
  } else {
    return keepLooking(elem, list[index_or_value], list);
  }
}

// partial function
function eternity (x) {
  return eternity(x);
}

// unknown if total... seems to return for n > 0
function collatz (n) {
  if (n === 1) {
    return 1;
  } else if (n%2 === 0) {
    return collatz(n/2);
  } else {
    return collatz(3*n + 1);
  }
}

// known to be total but huge call stack even for small ms and ns
function ackermann (m, n) {
  if (n === 0) {
    return (m + 1);
  } else if (m === 0) {
    return ackermann(n - 1, 1);
  } else {
    return ackermann(n - 1, ackermann(n, m - 1));
  }
}

function willStop (f) {
  // should return true if f returns with the argument [], false otherwise
}

// paradox:
  // if willStop(lastTry) is true, lastTry will not stop
  // if willStop(lastTry) is false, lastTry will stop
function lastTry (x) {
  return willStop(lastTry) && eternity(x);
}

// ----

function length (list) {
  if (list.length === 0) {
    return 0;
  } else {
    return 1 + length(list.slice(1));
  }
}

function len0 (list) {
  if (list.length === 0) {
    return 0;
  } else {
    return 1 + eternity(list.slice(1));
  }
}

function len1 (list) {
  if (list.length === 0) {
    return 0;
  } else {
    return 1 + len0(list.slice(1));
  }
}


function makeLength (makeLength) {
  return function (list) {
    if (list.length === 0) {
      return 0;
    } else {
      return 1 + makeLength(makeLength)(list.slice(1));
    }
  }
}

var len = function (makeLength) {
  return makeLength(makeLength);
}(function (makeLength) {
  return function (list) {
    if (list.length === 0) {
      return 0;
    } else {
      return 1 + makeLength(makeLength)(list.slice(1));
    }
  }
})

console.log(len([]))
console.log(len([1]))
console.log(len([1,3]))
