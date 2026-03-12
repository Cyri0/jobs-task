import { useEffect, useState } from 'react'
import Job, { type JobType } from './components/Job'

const App = () => {
  const [jobs, setJobs] = useState<JobType[]>([])

  useEffect(()=>{
    fetch("data.json")
    .then(response => response.json())
    .then(data => setJobs(data))
  },[])

  return (
    <div>
      <h1>App</h1>

      {jobs.map(job => <Job {...job} />)}
    </div>
  )
}

export default App