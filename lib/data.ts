import projectsData from './projects.json';
import resumeData from './resume-data.json';

export interface TechIcon {
  name?: string;
  type: 'letter' | 'image';
  content?: string;
  icon?: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  techIcons?: TechIcon[];
  liveUrl?: string;
  githubUrl?: string;
  private?: boolean;
}

export interface WorkExperience {
  id: number;
  position: string;
  company: string;
  duration: string;
  period: string;
  technologies: string[];
  description: string;
}

export interface Education {
  id: number;
  degree: string;
  field?: string;
  institution: string;
  period: string;
  status: string;
  location?: string;
}

export interface Skills {
  frontend: string[];
  backend: string[];
  design: string[];
  tools: string[];
}

export const projects: Project[] = projectsData as Project[];
export const workExperience: WorkExperience[] =
  resumeData.workExperience as WorkExperience[];
export const education: Education[] = resumeData.education as Education[];
export const skills: Skills = resumeData.skills as Skills;
