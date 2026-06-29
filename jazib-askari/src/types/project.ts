export interface Project {
  id: string;
  title: string;
  subtitle: string;
  summary: string;
  skills: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageDark?: string;
  imageLight?: string;
  videoLight?: string;
  videoDark?: string;
  ideationText?: string;
  testingText?: string;
  date?: Date;
  readTime?: string;
  type: string;
}
