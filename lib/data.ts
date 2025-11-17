import projectsData from './projects.json';

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

export const projects: Project[] = projectsData as Project[];
