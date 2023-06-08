---
id: 1
slug: 01_multiples_of_3_or_5
created_at: '2001-10-05T06:00:00.000Z'
solved_at: '2023-05-30T18:00:00.000Z'
title: Multiples of 3 or 5
difficult: 5
---

<p>If we list all the natural numbers below `10` that are multiples of `3` or `5`, we get `3, 5, 6` and `9`. The sum of these multiples is `23`.</p>
<p>Find the sum of all the multiples of `3` or `5` below `1000`.</p>

<details>
  <summary>Solution</summary>

  <code>

    limit = 1000
    result = 0

    for n in range(limit):
        if( n % 3 == 0 or n % 5 == 0):
            result += n

    print(result)

  </code>
</details>

