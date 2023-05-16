import { useMobileMenu } from '@/context/mobileMenu.context'
import { List } from 'phosphor-react'

export function MobileMenu() {
  const { setMobileMenu } = useMobileMenu()
  return (
    <button
      className="interaction flex items-center text-text"
      onClick={() => setMobileMenu(true)}
    >
      <List size={24} />
    </button>
  )
}
