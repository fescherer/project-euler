// import { ProblemList } from '@/features/ProblemList'
import { ProblemPage } from '@/features/ProblemPage'
import { getProjectsMetadata } from '@/utils/getProjectMetadata'

export default function Home() {
  const data = getProjectsMetadata('problems')
  console.log(data)
  return (
    <>
      {/* <ProblemList /> */}
      <div>
        {data.map((item) => (
          <div key={item.id} className="flex flex-col gap-1">
            <span>{item.title}</span>
            <span>{item.created_at}</span>
            <span>{item.solved_at}</span>
            <span>{item.slug}</span>
            <span>{item.id}</span>
          </div>
        ))}
      </div>
      <ProblemPage />
    </>
  )
}
