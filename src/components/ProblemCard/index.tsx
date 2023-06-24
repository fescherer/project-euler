import { ProjectMetadata } from '@/@types/Metadata'
import { getDateFormated } from '@/utils/getDateFormated'
import Link from 'next/link'
import { CaretRight } from 'phosphor-react'

type ProblemCardProps = {
  card: ProjectMetadata
}

export function ProblemCard({ card }: ProblemCardProps) {
  const date = getDateFormated(card.solved_at)

  return (
    <div className="flex h-[200px] w-[293px] flex-col items-start bg-foreground p-2">
      <div className="flex w-full justify-between">
        <span className="font-bold text-primary">
          {`#${card.id.toString().padStart(2, '0')}`}
        </span>
        <span className="text-enabled">
          Difficulty:
          <strong className="font-bold">{` ${card.difficult}%`}</strong>
        </span>
      </div>
      <div className="h-full w-full text-justify text-lg font-bold tracking-wide">
        {card.title}
      </div>
      <div className="flex w-full items-center justify-between p-2">
        <span className="text-sm">Solved{` ${date}`}</span>
        <Link
          href={card.slug}
          title="Go to resolution page"
          className="rounded-full bg-disabled text-text transition-all hover:scale-110"
        >
          <CaretRight size={24} weight="bold" />
        </Link>
      </div>
    </div>
  )
}
