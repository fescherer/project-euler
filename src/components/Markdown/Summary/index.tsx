'use client'

import { CaretDown } from 'phosphor-react'

export function SummaryMarkdown({ children }: any) {
  return (
    <summary className="group group flex cursor-pointer items-center justify-between text-xl">
      {children}
      <CaretDown className="group-open:text-primary" />
    </summary>
  )
}
