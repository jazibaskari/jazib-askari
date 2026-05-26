import type { Project } from "../types/project";
export const projects: Project[] = [
  {
    id: "1",
    title: "Portfolio Website",
    subtitle: "Jazib Askari",
    summary:
      "This portfolio website was built using React, Typescript and Material UI. It features a clean and modern design, showcasing my projects, skills, and experience in an engaging way. The website is fully responsive, ensuring a seamless experience across all devices.",
    skills: ["Frontend", "Data & Security", "Testing"],
    githubUrl: "https://github.com/jazibaskari",
    liveUrl: "jazibaskari.com",
  },
  {
    id: "2",
    title: "Finance Dashboard",
    subtitle: "Budgy",
    summary:
      "A secure, responsive personal finance dashboard built with React, TypeScript, and Tailwind CSS that features real-time Monzo transaction syncing, automated budget management, and interactive data visualisation.",
    skills: ["UI/UX", "Data & Security", "Tooling"],
    githubUrl: "https://github.com/jazibaskari/budgy",
    liveUrl: "www.google.com",
  },
  {
    id: "3",
    title: "Desktop RPG Game",
    subtitle: "Sweet Escape",
    summary:
      "A React and Typescript-based desktop RPG game, featuring a rich storyline, immersive graphics, and engaging gameplay mechanics.",
    skills: ["UI/UX", "Data & Security", "Tooling"],
    githubUrl: "https://github.com/jazibaskari",
    liveUrl: "www.google.com",
  },
];
