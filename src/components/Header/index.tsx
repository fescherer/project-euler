import Image from 'next/image'
import { appConfig } from '@/utils/config'
import { DeviceMobile  } from 'phosphor-react'
import Link from 'next/link'
import { Divider } from '../Primitives/Divider'
import { ThemeButton } from './components/ThemeButton'
import clsx from 'clsx'
import { menu } from './data'
import { CookieMessage } from './components/CookieMessage'

export function Header() {

  return (
    <div className="bg-header-background px-5">
      <header className="m-auto hidden max-w-[1300px] justify-between lg:flex">
        <div className="flex items-center gap-8 py-5">
          <Image
            src="/logo.png"
            width={117}
            height={27}
            alt={`Imagem logo de ${appConfig.app_name}`}
          />

          <nav>
            <ul className="flex gap-5 text-header-background-text">
              {menu.map((item) => (
                <li key={item.title}>
                  {
                    <Link
                      className={clsx(
                        'flex cursor-pointer items-center gap-1 text-sm font-bold uppercase transition-all hover:text-primary',
                        { 'text-primary': item.title === 'Estratégias' }
                      )}
                      href={item.link}
                      target={item.link ? '_blank' : '_self'}
                    >
                      {item.icon}
                      {item.title}
                    </Link>
                  }
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* config menu */}
        <div className="flex -skew-x-[15deg] items-center bg-header-foreground px-5 text-header-foreground-text">
          <div className="flex h-full skew-x-[15deg] items-center gap-5 p-3">
            <Link
              href="https://br.playscores.com/plataforma"
              target="_blank"
              className="flex h-full items-center gap-1 font-medium transition-all hover:text-header-text"
            >
              <DeviceMobile size={16} />
              Vincular seu app
            </Link>

            <Divider dataOrientation="vertical" />
            <Divider dataOrientation="vertical" />
            <ThemeButton />
          </div>
        </div>
      </header>

      <header className="m-auto flex max-w-[1300px] items-center justify-between gap-8 py-5 text-header-background-text lg:hidden">

        <Image
          src="/logo.png"
          width={117}
          height={27}
          alt={`Imagem logo de ${appConfig.app_name}`}
        />
        <div />
      </header>

      <CookieMessage />
    </div>
  )
}
