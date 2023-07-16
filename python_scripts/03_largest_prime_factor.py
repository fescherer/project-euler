# The prime factors of 13195 are 5, 7, 13 and 29.
# What is the largest prime factor of the number 600851475143?

# Divide by 2 until cannot, after, try to divide for odd numbers until quocient is 1

primeFactors = []
result = 30
multiply = 2

while result % multiply == 0:
  result = result / multiply
  primeFactors.append(multiply)

multiply += 1

while result != 1:
  if(result % multiply != 0):
    multiply += 2
  else:
    primeFactors.append(multiply)
    result = result / multiply

print('The prime factors are', primeFactors)
print('The largest prime factor is', multiply)
