a, b = int(input()), int(input())
print(*[x**2 for x in range(int(a**0.5), int(b**0.5) + 1) if a <= x**2 <= b])
