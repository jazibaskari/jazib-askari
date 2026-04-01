export interface Project {
    id: string;
    title: string;
    subtitle: string; 
    summary: string;
    skills: string[];
    githubUrl?: string;  
    liveUrl?: string;
    image?: string;
  }