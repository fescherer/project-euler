import matter from 'gray-matter'
import Markdown from 'markdown-to-jsx'
import { getDateFormated } from '@/utils/getDateFormated'
import { customRenderers } from './customRender'

type ProblemPageProps = {
  project: matter.GrayMatterFile<string>
}

export function ProblemPage({ project }: ProblemPageProps) {
  return (
    <div className="flex w-full flex-col gap-5 p-5">
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
          overrides: customRenderers
        }}
      >
        {project.content}
      </Markdown>
    </div>
  )
}
