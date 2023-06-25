'use client'

import { ProjectMetadata } from '@/@types/Metadata'
import { ProblemCard } from '@/components/ProblemCard'
import { useSearchInputContext } from '@/context/search.context'

type ProblemListProps = {
  data: ProjectMetadata[]
}

function getFilteredData(data: ProjectMetadata[], filter: string) {
  if (!filter) return data
  else {
    const rg = new RegExp(`^(?=.*\\b${filter}).*$`, 'gmi')
    return data.filter(
      (item) =>
        item.title.match(rg) ||
        item.id.toString().match(rg) ||
        item.slug.match(rg)
    )
  }
}

export function ProblemList({ data }: ProblemListProps) {
  const { searchInput } = useSearchInputContext()

  const filteredData = getFilteredData(data, searchInput)

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
        {filteredData.map((item) => (
          <ProblemCard key={item.id} card={item} />
        ))}
      </div>
    </div>
  )
}
