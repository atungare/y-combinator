(def Y
  (fn [f]
    (f (fn [x] ((Y f) x)))))

(def almostFact
  (fn [fact]
    (fn [n]
      (if (= n 0)
        1
        (* n (fact (- n 1)))))))

(defn partFactorial [self]
  (fn [fact]
    (fn [n]
      (if (= n 0)
        1
        (* n (fact (- n 1))))))
  ((fn [x] (x x)) self))

(def factorial (partFactorial partFactorial))

