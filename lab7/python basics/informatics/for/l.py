num = input()
print(sum([int(num[x]) * 2**x for x in range(len(num))]))