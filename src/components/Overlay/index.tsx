'use client'

import { useMobileMenu } from '@/context/mobileMenu.context'

export function Overlay() {
  const { mobileMenu, setMobileMenu } = useMobileMenu()
  return (
    <>
      {mobileMenu && (
        <button
          onClick={() => setMobileMenu(false)}
          className="absolute h-full w-full bg-black opacity-90"
        />
      )}
    </>
  )
}
