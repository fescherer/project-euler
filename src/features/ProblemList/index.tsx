'use client'

import { useState } from 'react'

export function ProblemList() {
  const [list] = useState(['11', '12', '13', '14', '15', '16', '17'])

  return (
    <div className="m-5">
      <div>
        <h2>Project Euler Solutions</h2>
        <p>
          Project Euler é um repositório de exercícios matemáticos que precisam
          de um pouco mais que matemática para serem resolvidos
        </p>
      </div>
      <div className="flex">
        {list.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </div>
  )
}
