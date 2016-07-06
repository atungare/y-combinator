eternity x = eternity x

len :: [a] -> Int
len [] = 0
len (_:xs) = 1 + len xs

len0 [] = 0
len0 (_:xs) = 1 + eternity xs

len1 [] = 0
len1 (_:xs) = 1 + len0 xs