'use client'

import { ProjectMetadata } from '@/@types/Metadata'
import { useMobileMenu } from '@/context/mobileMenu.context'
import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type AsideBarProps = {
  data: ProjectMetadata[]
}

export function AsideBar({ data }: AsideBarProps) {
  const { mobileMenu } = useMobileMenu()
  const pathname = usePathname()
  const route = pathname.split('/')[1]

  return (
    <aside
      className={clsx('w-40 bg-background-3 p-3', {
        'absolute right-0 top-0 h-full md:block': mobileMenu,
        'hidden h-auto md:block ': !mobileMenu
      })}
    >
      <h2 className="font-semibold uppercase">Project Euler</h2>

      <ul>
        {data.map((item) => (
          <li
            key={item.id}
            className="flex max-w-[10rem] overflow-hidden text-ellipsis whitespace-nowrap text-sm font-medium"
          >
            <Link
              href={item.slug}
              className={clsx('flex items-center gap-2', {
                'text-disabled': item.slug !== route,
                'text-text': item.slug === route
              })}
              title={item.title}
            >
              <div
                className={clsx('h-3 w-3 rounded-full', {
                  'bg-disabled': item.slug !== route,
                  'bg-text': item.slug === route
                })}
              />
              <span>{`[${String(item.id).padStart(2, '0')}] - `}</span>
              <span>{item.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  )
}
