import fs from 'fs'
import matter from 'gray-matter'
import { ProjectMetadata } from '@/@types/Metadata'

export function getProjectsMetadata(folder: string): ProjectMetadata[] {
  const files = fs.readdirSync(folder)
  const markdownProjects = files.filter((file) => file.endsWith('.md'))

  const projects = markdownProjects.map((fileName) => {
    const fileContent = fs.readFileSync(`${folder}/${fileName}`, 'utf-8')
    const matterResults = matter(fileContent)
    return {
      id: matterResults.data.id,
      slug: matterResults.data.slug,
      created_at: matterResults.data.created_at,
      solved_at: matterResults.data.solved_at,
      title: matterResults.data.title,
      difficult: matterResults.data.difficult
    }
  })

  return projects
}
