'use client'

import Link from 'next/link'
import { CookieMessage } from './components/CookieMessage'
import FSLogo from '@/Icons/FSLogo'
import { ThemeButton } from './components/ThemeButton'
import { SearchInput } from './components/SearchInput/SearchInput'
import { MobileMenu } from './components/MobileMenu'

export function Header() {
  return (
    <div className="bg-background-2 px-5">
      <header className="m-auto flex max-w-screen-xl flex-col">
        <div className="container mx-auto flex flex-wrap items-center justify-between">
          <div className="text-title interaction">
            <Link href="/" className="text-primary ">
              <FSLogo />
            </Link>
          </div>

          <div>
            <ul className="flex gap-2 p-4 md:mt-0 md:flex-row md:space-x-8 md:text-2xl">
              <li className="hidden w-full md:block md:w-auto">
                <SearchInput />
              </li>
              <li className="flex items-center">
                <ThemeButton />
              </li>
              <li className="block md:hidden">
                <MobileMenu />
              </li>
            </ul>
          </div>
        </div>

        <div
          data-collapse-toggle="navbar-default"
          className="text-gray-500 ml-3 inline-flex items-center rounded-lg p-2 text-sm md:hidden"
          aria-controls="navbar-default"
          aria-expanded="false"
          aria-label=""
        >
          <SearchInput />
        </div>
      </header>

      <CookieMessage />
    </div>
  )
}
