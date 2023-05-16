'use client'

import { ProblemCard } from '@/components/ProblemCard'
import { useState } from 'react'

export function ProblemList() {
  const [list] = useState(['11', '12', '13', '14', '15', '16', '17'])

  return (
    <div className="m-5 flex flex-col gap-10">
      <div>
        <h2>Project Euler Solutions</h2>
        <p>
          Project Euler é um repositório de exercícios matemáticos que precisam
          de um pouco mais que matemática para serem resolvidos
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-5">
        {list.map((item) => (
          <ProblemCard key={item} />
        ))}
      </div>
    </div>
  )
}
