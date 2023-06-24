'use client'

import { Children } from '@/@types/Util'
import { SearchInputProvider } from './search.context'
import { MobileMenuProvider } from './mobileMenu.context'
import { ThemeProvider } from './theme.context'

export default function AppContextProvider({ children }: Children) {
  const components: Array<
    | React.JSXElementConstructor<React.PropsWithChildren<unknown>>
    | (({ children }: Children) => JSX.Element)
  > = [SearchInputProvider, MobileMenuProvider, ThemeProvider]

  return (
    <>
      {components.reduceRight((acc, Comp) => {
        return <Comp>{acc}</Comp>
      }, children)}
    </>
  )
}
