'use client'

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus, vs } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { useThemeContext } from '@/context/theme.context'

export function CodeMarkdown({ children }: any) {
  const { theme } = useThemeContext()
  return (
    <SyntaxHighlighter
      language="python"
      style={theme === 'dark' ? vscDarkPlus : vs}
    >
      {children}
    </SyntaxHighlighter>
  )
}
