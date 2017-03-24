y :: (a -> a) -> a
y f = f (y f)

almostFactorial fact n
  | n <= 0    = 1
  | otherwise = n * (fact (n - 1))

factorial = y almostFactorial

almostFoldR _ _ init [] = init
almostFoldR foldr' f init (x:xs) = f x (foldr' f init xs)

myFoldR = y almostFoldR

main = do
  print (map factorial [1 .. 20])
  print (myFoldR (+) 0 [1..10])
