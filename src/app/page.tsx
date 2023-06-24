import { ProblemList } from '@/features/ProblemList'
import { getProjectsMetadata } from '@/utils/getProjectMetadata'

export default function Home() {
  const data = getProjectsMetadata('problems')

  return <ProblemList data={data} />
}
