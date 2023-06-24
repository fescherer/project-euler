'use client'

import { ProjectMetadata } from '@/@types/Metadata'
import { ProblemCard } from '@/components/ProblemCard'

type ProblemListProps = {
  data: ProjectMetadata[]
}

export function ProblemList({ data }: ProblemListProps) {
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
        {data.map((item) => (
          <ProblemCard key={item.id} card={item} />
        ))}
      </div>
    </div>
  )
}
