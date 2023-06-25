import Link from 'next/link'
import { Door } from 'phosphor-react'

export function BackToList() {
  return (
    <Link
      href="/"
      className="flex items-center gap-1 text-base font-bold uppercase transition-all hover:text-primary"
    >
      <Door size={20} />
      <span>Return to all projects</span>
    </Link>
  )
}
