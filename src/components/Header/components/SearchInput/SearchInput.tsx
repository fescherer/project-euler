import { useSearchInputContext } from '@/context/search.context'
import { MagnifyingGlass } from 'phosphor-react'

export function SearchInput() {
  const { searchInput, setSearchInput } = useSearchInputContext()

  return (
    <div className="flex w-full items-center gap-1 rounded-lg border-2 border-primary bg-background px-3 text-base font-medium text-primary outline-none transition-all focus-within:ring-2 focus-within:ring-primary md:w-auto">
      <MagnifyingGlass weight="bold" />
      <input
        onChange={(event) => setSearchInput(event.target.value)}
        value={searchInput}
        type="text"
        placeholder="Search for a problem"
        className="w-full bg-background p-1 text-text outline-none placeholder:text-white"
      />
    </div>
  )
}
