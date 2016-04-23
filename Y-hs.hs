y :: (a -> a) -> a
y f = f (y f)

almostFactorial fact n
  | n <= 0    = 1
  | otherwise = n * (fact (n - 1))

factorial = y almostFactorial

main = do
  print (map factorial [1 .. 20])
