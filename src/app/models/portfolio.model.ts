export interface PersonalInfo {
  name: string;
  title: string;
  location: string;
  description: string;
  email: string;
  cvUrl: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface SkillGroups {
  frontend: string[];
  backend: string[];
  databases: string[];
  tools: string[];
  cloud: string[];
  other: string[];
}

export interface Project {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  image: string;
  githubUrl: string;
  liveUrl: string;
}

export interface ExperienceEntry {
  id: number;
  position: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  technologies: string[];
}

export interface EducationEntry {
  id: number;
  institution: string;
  location: string;
  program: string;
  startDate: string;
  endDate: string;
  status: string;
}

export interface ServiceItem {
  title: string;
  description: string;
}

export interface PortfolioData {
  personal: PersonalInfo;
  socials: SocialLink[];
  skills: SkillGroups;
  projects: Project[];
  experience: ExperienceEntry[];
  education: EducationEntry[];
  services: ServiceItem[];
}
