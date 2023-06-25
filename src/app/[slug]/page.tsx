import { ProjectMetadata } from '@/@types/Metadata'
import { getProjectsMetadata } from '@/utils/getProjectMetadata'
import matter, { GrayMatterFile } from 'gray-matter'
import fs from 'fs'

import { ProblemPage } from '@/features/ProblemPage'

type ProblemProps = {
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

export default async function Problem({ params }: ProblemProps) {
  const project = await getProject(params.slug)

  return <ProblemPage project={project} />
}
