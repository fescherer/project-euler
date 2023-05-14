import { appConfig } from '@/utils/config'
import { useEffect, useState } from 'react'

export function CookieMessage() {
  const [showCookieMessage, setShowCookieMessage] = useState<boolean>()

  useEffect(() => {
    const userCookieResponse = JSON.parse(
      window.localStorage.getItem(`${appConfig.app_slug}:showCookieMessage`) ??
        'true'
    )

    if (userCookieResponse)
      window.localStorage.setItem(
        `${appConfig.app_slug}:showCookieMessage`,
        'true'
      )

    setShowCookieMessage(userCookieResponse)
  }, [])

  const saveCookies = () => {
    window.localStorage.setItem(
      `${appConfig.app_slug}:showCookieMessage`,
      'false'
    )
    setShowCookieMessage(false)
  }

  if (!showCookieMessage) return <></>

  return (
    <button
      className="fixed bottom-6 left-6 z-50 flex w-72 flex-col gap-3 rounded-sm bg-foreground p-3 text-start text-strategy-card-text shadow-xl hover:ring-2 hover:ring-primary
        "
      onClick={saveCookies}
      aria-label="Botão para fechar a mensagem de uso de cookie"
    >
      <span className="text-xl font-medium text-strategy-card-title">
        🍪 Nós usamos cookies 🍪
      </span>
      <span>
        Para melhorar sua experiência utilizando esse produto, foram usados
        cookies e outras tecnologias semelhantes. Utilizando nossos produtos
        você concorda com o uso de cookies e outras tecnologias semelhantes.
      </span>
      <span className="text-end tracking-wide text-strategy-card-title">
        Ok. Obrigado
      </span>
    </button>
  )
}
