import { CaretRight } from 'phosphor-react'

export function ProblemCard() {
  return (
    <div className="flex h-[200px] w-[293px] flex-col items-start bg-foreground p-2">
      <div className="flex w-full justify-between">
        <span className="text-primary"> #01</span>
        <span className="text-enabled">Difficulty: 5%</span>
      </div>
      <div className="h-full w-full text-justify">dasdasd</div>
      <button className="flex items-start self-end rounded-full bg-disabled text-text transition-all hover:scale-110">
        <CaretRight size={24} weight="bold" />
      </button>
    </div>
  )
}
