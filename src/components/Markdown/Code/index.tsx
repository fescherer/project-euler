'use client'

import { appConfig } from '@/utils/config'
import { useEffect, useState } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus, vs } from 'react-syntax-highlighter/dist/esm/styles/prism'

export function CodeMarkdown({ children }: any) {
  const [theme, setTheme] = useState('')

  useEffect(() => {
    const storagedTheme = window.localStorage.getItem(
      `${appConfig.app_slug}:theme`
    )
    setTheme(storagedTheme ?? 'dark')
  }, [])

  return (
    <SyntaxHighlighter
      language="python"
      style={theme === 'dark' ? vscDarkPlus : vs}
    >
      {children}
    </SyntaxHighlighter>
  )
}
