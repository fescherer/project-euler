import AppContextProvider from '@/context/app.context'
import { Header } from '../Header'
import { Overlay } from '../Overlay'
import { AsideBar } from '@/features/AsideBar'
import { getProjectsMetadata } from '@/utils/getProjectMetadata'

type LayoutProps = {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  const data = getProjectsMetadata('problems')

  return (
    <AppContextProvider>
      <Overlay />
      <Header />
      <div className="m-auto flex h-full w-full max-w-screen-2xl">
        <AsideBar data={data} />

        <main>{children}</main>
      </div>
    </AppContextProvider>
  )
}
