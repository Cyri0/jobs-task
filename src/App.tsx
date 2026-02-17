import { useEffect, useState } from "react"
import type { Job } from "./types/JobTypes"
import JobCard from "./components/JobCard"

const App = () => {
  const [jobs, setJobs] = useState<Job[]>([])

  useEffect(()=>{
    fetch("data.json")
    .then(response => response.json())
    .then(data => setJobs(data))
  },[])

  return (
    <>
      <header></header>
      <div className="jobsWrapper">
      {jobs.map(job => <JobCard key={job.id} job={job} />)}
      </div>
    </>
  )
}

export default App