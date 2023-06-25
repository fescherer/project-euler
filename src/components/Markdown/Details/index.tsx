export function DetailsMarkdown({ children }: any) {
  return (
    <details className="my-3 flex rounded-md bg-foreground p-3">
      {children}
    </details>
  )
}
