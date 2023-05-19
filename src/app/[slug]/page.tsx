import { ProjectMetadata } from '@/@types/Metadata'
import { getProjectsMetadata } from '@/utils/getProjectMetadata'
import matter, { GrayMatterFile } from 'gray-matter'
import fs from 'fs'
import Markdown from 'markdown-to-jsx'
import { getDateFormated } from '@/utils/getDateFormated'
import { CodeMarkdown } from '@/components/Markdown/Code'
import { DetailsMarkdown } from '@/components/Markdown/Details'
import { SummaryMarkdown } from '@/components/Markdown/Summary'
import { AnchorMarkdown } from '@/components/Markdown/Anchor'

type ProblemPageProps = {
  params: { id: any; slug: string }
}

export const generateStaticParams = async () => {
  const projects: ProjectMetadata[] = getProjectsMetadata('problems')
  return projects.map((project) => ({
    slug: project.slug
  }))
}

async function getProject(slug: string): Promise<GrayMatterFile<string>> {
  const file = `problems/${slug}.md`
  const content = fs.readFileSync(file, 'utf8')

  const matterResult = matter(content)
  return matterResult
}

export default async function ProblemPage({ params }: ProblemPageProps) {
  const project = await getProject(params.slug)

  return (
    <div className="flex flex-col gap-5 p-5">
      <div className="flex flex-col gap-1 font-bold">
        <h1 className="text-3xl">
          {`#${project.data.id.toString().padStart(2, '0')} - ${
            project.data.title
          }`}
        </h1>

        <span className="text-xs">
          {`Created at: ${getDateFormated(project.data.created_at)}`}
        </span>
        <span className="text-xs">
          {`Solved at: ${getDateFormated(project.data.solved_at)}`}
        </span>
      </div>
      <Markdown
        options={{
          overrides: {
            details: { component: DetailsMarkdown },
            summary: { component: SummaryMarkdown },
            a: { component: AnchorMarkdown },
            code: { component: CodeMarkdown }
          }
        }}
      >
        {project.content}
      </Markdown>
    </div>
  )
}

