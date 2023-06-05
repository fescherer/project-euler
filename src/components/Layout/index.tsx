'use client'

import AppContextProvider from '@/context/app.context'
import { Header } from '../Header'
import { Overlay } from '../Overlay'
import { AsideBar } from '@/features/AsideBar'

type LayoutProps = {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <AppContextProvider>
      <Overlay />
      <Header />
      <div className="m-auto flex h-full w-full max-w-screen-2xl">
        <AsideBar />

        <main>{children}</main>
      </div>
    </AppContextProvider>
  )
}
