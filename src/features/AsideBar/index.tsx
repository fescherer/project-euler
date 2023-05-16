import { useMobileMenu } from '@/context/mobileMenu.context'
import clsx from 'clsx'
import { useState } from 'react'

export function AsideBar() {
  const [active, setActive] = useState(1)
  const { mobileMenu } = useMobileMenu()

  const projects = [
    { id: 1, title: 'Exemplos 3x56' },
    { id: 2, title: 'Even Fibonacci nudasdasdasdasdasdasd' }
  ]
  return (
    <aside
      className={clsx('h-full w-40 bg-background-3 p-3', {
        'absolute right-0 top-0 md:block': mobileMenu,
        'hidden md:block': !mobileMenu
      })}
    >
      <h2 className="font-semibold uppercase">Project Euler</h2>

      <ul>
        {projects.map((item) => (
          <li
            key={item.id}
            className="flex max-w-[10rem] overflow-hidden text-ellipsis whitespace-nowrap text-sm font-medium"
          >
            <button
              onClick={() => setActive(item.id)}
              className={clsx('flex items-center gap-2', {
                'text-disabled': item.id !== active,
                'text-text': item.id === active
              })}
              title={item.title}
            >
              <div
                className={clsx('h-3 w-3 rounded-full', {
                  'bg-disabled': item.id !== active,
                  'bg-text': item.id === active
                })}
              />
              <span>{`[${String(item.id).padStart(2, '0')}] - `}</span>
              <span>{item.title}</span>
            </button>
          </li>
        ))}
      </ul>
    </aside>
  )
}
