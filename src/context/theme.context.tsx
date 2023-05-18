import { Children } from '@/@types/Util'
import React from 'react'

type ThemeType = {
  theme: string
  setTheme: React.Dispatch<React.SetStateAction<string>>
}

export const ThemeContext = React.createContext<ThemeType>({
  theme: '',
  setTheme: () => null
})

export const ThemeProvider = ({ children }: Children) => {
  const [theme, setTheme] = React.useState<string>('')

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useThemeContext = () => React.useContext(ThemeContext)
