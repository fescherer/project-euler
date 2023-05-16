import { Children } from '@/@types/Util'
import React from 'react'

type MobileMenuType = {
  mobileMenu: boolean
  setMobileMenu: React.Dispatch<React.SetStateAction<boolean>>
}

export const MobileMenuContext = React.createContext<MobileMenuType>({
  mobileMenu: false,
  setMobileMenu: () => null
})

export const MobileMenuProvider = ({ children }: Children) => {
  const [mobileMenu, setMobileMenu] = React.useState<boolean>(false)

  return (
    <MobileMenuContext.Provider value={{ mobileMenu, setMobileMenu }}>
      {children}
    </MobileMenuContext.Provider>
  )
}

export const useMobileMenu = () => React.useContext(MobileMenuContext)
