import { Children } from '@/@types/Util'
import React from 'react'

type SearchContextType = {
  searchInput: string
  setSearchInput: React.Dispatch<React.SetStateAction<string>>
}

export const SearchInputContext = React.createContext<SearchContextType>({
  searchInput: '',
  setSearchInput: () => null
})

export const SearchInputProvider = ({ children }: Children) => {
  const [searchInput, setSearchInput] = React.useState<string>('')

  return (
    <SearchInputContext.Provider value={{ searchInput, setSearchInput }}>
      {children}
    </SearchInputContext.Provider>
  )
}

export const useSearchInputContext = () => React.useContext(SearchInputContext)
