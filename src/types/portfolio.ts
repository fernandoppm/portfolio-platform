export interface Project {
  id: string;
  title: string;
  description: string;
  link: string;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  years: string;
}

export interface Portfolio {
  id: string;
  name: string;
  title: string; 
  skills: string[];
  experiences: Experience[];
  projects: Project[];
}