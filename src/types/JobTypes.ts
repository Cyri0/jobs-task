type RoleType = "Frontend" | "Fullstack" | "Backend"
type ContractType = "Full Time" | "Part Time" | "Contract"
type LevelType = "Junior" | "Midweight" | "Senior"

export type Job = {
  id: number,
  company: string,
  logo: string,
  new: boolean,
  featured: boolean,
  position: string,
  role: RoleType,
  level: LevelType,
  postedAt: string,
  contract: ContractType,
  location: string,
  languages: string[],
  tools: string[]
}

