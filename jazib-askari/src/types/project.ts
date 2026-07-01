export type ContentBlock =
  | { type: "text"; content: string }
  | { type: "image"; srcDark: string; srcLight: string; caption?: string }
  | { type: "code"; content: string; language: string };
export interface Project {
  id: string;
  title: string;
  subtitle: string;
  summary: string;
  skills: string[];
  specificSkills?: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageDark?: string;
  imageLight?: string;
  videoLight?: string;
  videoDark?: string;
  ideationText?: string;
  keyConsiderationsContent?: ContentBlock[];
  keyConsiderationsText?: string;
  testingText?: string;
  date?: Date;
  readTime?: string;
  type: string;
  arcImageLight?: string;
  arcImageDark?: string;
  ideationContent?: ContentBlock[];
  ideationImageDark?: string;
  ideationImageLight?: string;
  ideationImageCaption?: string;
}
