---
id: 3
slug: 03_largest_prime_factor
created_at: '2001-11-02T06:00:00.000Z'
solved_at: '2023-05-30T18:00:00.000Z'
title: Largest Prime Factor
difficult: 5
---

<p>The prime factors of 13195 are 5, 7, 13 and 29.</p>

<p>What is the largest prime factor of the number 600851475143?</p>

<details>
  <summary>Solution</summary>

  The first thing you should think of is that you need to find what prime numbers are made from the specific number, first try to divide as much as possible by 2, that way you now can divide only by odd numbers, because if the number you trying to divide is even, this already will be processed on the division by 2.

  And what about for 9 for example? 9 will never be counted as prime number in this algorithm because will be divided by 3 earlier. This is not the most efficient way to do, but is simple and very interesting.

  ```python
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
  ```
</details>
