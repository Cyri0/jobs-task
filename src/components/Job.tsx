export type JobType = {
    id: number,
    company: string,
    logo: string,
    new: boolean,
    featured: boolean,
    position: string,
    role: string,
    level: string,
    postedAt: string,
    contract: string,
    location: string,
    languages: string[],
    tools: []
}

const Job = (props: JobType) => {

  const tags:string[] = [props.role, props.level, ...props.languages, ...props.tools]

  return (
    <div className={"jobCard" + (props.featured ? " featuredBorder" : "")}>
        <div className="logo">
            <img src={props.logo} alt={props.company} />
        </div>
        <div className="details">
            <strong>{props.company}</strong>
            {props.new && <span className="new">NEW!</span>}
            {props.featured && <span className="featured">FEATURED</span>}
            <h2>{props.position}</h2>
            <div>
                <span>{props.postedAt}</span>
                <span>{props.contract}</span>
                <span>{props.location}</span>
            </div>
        </div>
        <div className="tags">
            {tags.map(tag => <button>{tag}</button>)}
        </div>
    </div>
  )
}

export default Job