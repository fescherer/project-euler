import { CodeMarkdown } from '@/components/Markdown/Code'
import { DetailsMarkdown } from '@/components/Markdown/Details'
import { SummaryMarkdown } from '@/components/Markdown/Summary'
import { AnchorMarkdown } from '@/components/Markdown/Anchor'
import { MarkdownToJSX } from 'markdown-to-jsx'
import { StrongMarkdown } from '@/components/Markdown/Strong'
import { PMarkdown } from '@/components/Markdown/P'

export const customRenderers: MarkdownToJSX.Overrides | undefined = {
  // testeTag: {component: TesteTagComponentMarkdown}
  // to use custom Tag, just create a <testeTag></testeTag> into markdown file

  strong: { component: StrongMarkdown },
  details: { component: DetailsMarkdown },
  summary: { component: SummaryMarkdown },
  a: { component: AnchorMarkdown },
  code: { component: CodeMarkdown },
  p: { component: PMarkdown }
}
