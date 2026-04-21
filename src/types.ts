export interface Profile {
  name: string;
  title: string;
  background: string;
  about: string;
  contact: {
    email: string;
    github: string;
    linkedin: string;
  };
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  tech: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  year: string;
}

export interface Project {
  id: string;
  title: string;
  category: 'Web' | 'Game';
  description: string;
  tech: string[];
  demoUrl: string;
  image: string;
}

export interface PortfolioData {
  profile: Profile;
  experience: Experience[];
  certifications: Certification[];
  projects: Project[];
}
