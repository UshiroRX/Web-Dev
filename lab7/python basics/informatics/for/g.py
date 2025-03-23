x = int(input())
print(next(i for i in range(2, x + 1) if x % i == 0))
