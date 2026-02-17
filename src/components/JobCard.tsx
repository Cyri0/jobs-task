import type { Job } from "../types/JobTypes"

type JobCardProps = {
  job: Job
}

const JobCard = ({job}:JobCardProps) => {

  const tagList = [job.role, job.level, ...job.languages, ...job.tools]

  return (
    <div className="jobCard">
      <img className="logo" src={job.logo} alt={job.company} />
      <div className="mainPart">
        <header>
        <strong>{job.company}</strong>
<div>        {job.new && <span className="newTag">NEW!</span>}
        {job.featured && <span className="featuredTag">FEATURED</span>}</div>
      </header>
      <div className="position">{job.position}</div>
      <div className="details">
        <span>{job.postedAt}</span>
        <span>{job.contract}</span>
        <span>{job.location}</span>
      </div>
      </div>
      <hr />
      <div className="tags">
        {tagList.map(tag => <span>{tag}</span>)}
      </div>
    </div>
  )
}

export default JobCard