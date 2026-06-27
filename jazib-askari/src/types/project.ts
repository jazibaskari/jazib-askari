export interface Project {
  id: string;
  title: string;
  subtitle: string;
  summary: string;
  skills: string[];
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
  videoLight?: string;
  videoDark?: string;
  ideationText?: string;
  testingText?: string;
  date?: Date;
  readTime?: string;
}
