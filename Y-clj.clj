(def Y
  (fn [f]
    (f (fn [x] ((Y f) x)))))

(def almostFact
  (fn [fact]
    (fn [n]
      (if (= n 0)
        1
        (* n (fact (- n 1)))))))

(def partFactorial
  (fn [self]
   (fn [n]
     (if (= n 0)
       1
       (* n ((self self) (- n 1)))))))

(def factorial (partFactorial partFactorial))

