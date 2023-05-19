export function DetailsMarkdown({ children }: any) {
  console.log(children)
  return (
    <details className="flex rounded-md bg-foreground p-3">{children}</details>
  )
}
