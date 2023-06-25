---
id: 1
slug: 01_multiples_of_3_or_5
created_at: '2001-10-05T06:00:00.000Z'
solved_at: '2023-05-30T18:00:00.000Z'
title: Multiples of 3 or 5
difficult: 5
---

<p>If we list all the natural numbers below <strong>10</strong> that are multiples of <strong>3</strong> or <strong>5</strong>, we get <strong>3, 5, 6<strong> and <strong>9</strong>. The sum of these multiples is <strong>23</strong>.<p>
<p>Find the sum of all the multiples of <strong>3</strong> or <strong>5</strong> below <strong>1000</strong>.<p>


<details>
  <summary>Solution</summary>

  ```
    limit = 1000
    result = 0

    for n in range(limit):
        if( n % 3 == 0 or n % 5 == 0):
            result += n

    print(result)
   ```
</details>

