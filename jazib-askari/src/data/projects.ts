import type { Project } from "../types/project";
import PortfolioDark from "../assets/videos/PortfolioDark.mp4";
import PortfolioLight from "../assets/videos/PortfolioLight.mp4";
import BudgyDark from "../assets/videos/BudgyDark.mp4";
import BudgyLight from "../assets/videos/BudgyLight.mp4";
import ArchitextDark from "../assets/videos/ArchitextDark.mp4";
import ArchitextLight from "../assets/videos/ArchitextLight.mp4";
import SugarRushDark from "../assets/videos/SugarRushDark.mp4";
import SugarRushLight from "../assets/videos/SugarRushLight.mp4";
import SweetEscapeDark from "../assets/videos/SweetEscapeDark.mp4";
import SweetEscapeLight from "../assets/videos/SweetEscapeLight.mp4";

export const projects: Project[] = [
  {
    id: "1",
    title: "Portfolio Website",
    subtitle: "Jazib Askari",
    date: new Date("2026-03-11"),
    readTime: "15 min read",
    summary:
      "This portfolio website was built using React, Typescript and Material UI. It features an intentionally clean and minimal design, showcasing my projects, skills, and experience in a digestible way. The website is fully responsive, ensuring a seamless experience across all devices.",
    skills: [
      "Frontend",
      "UI/UX",
      "Data & Security",
      "Testing",
      "Tooling",
      "Backend",
    ],
    githubUrl: "https://github.com/jazibaskari",
    liveUrl: "https://jazibaskari.com",
    videoLight: PortfolioDark,
    videoDark: PortfolioLight,
  },
  {
    id: "2",
    title: "Finance Dashboard",
    subtitle: "Budgy",
    summary:
      "A secure, responsive personal finance dashboard built with React, TypeScript, and Tailwind CSS. The dashboard features real-time Monzo transaction syncing, automated budget management, and interactive data visualisation.",
    skills: [
      "Frontend",
      "UI/UX",
      "Data & Security",
      "Testing",
      "Tooling",
      "Backend",
    ],
    githubUrl: "https://github.com/jazibaskari/budgy",
    liveUrl: "https://github.com/jazibaskari/budgy",
    videoLight: BudgyDark,
    videoDark: BudgyLight,
  },
  {
    id: "3",
    title: "Software Architecture Diagram Generator",
    subtitle: "Architext",
    summary:
      "A headless script that turns JSON files into instantly-downloadable, high-level software architecture diagrams. This enables repeatable, version-controlled diagram generation with a single source of truth, allowing teams to track architectural changes across their development lifecycle. Enforcing a consistent design system also ensures that no time is wasted manually fiddling with a GUI. ",
    skills: ["UI/UX", "Data & Security", "Tooling"],
    githubUrl: "https://github.com/jazibaskari",
    liveUrl: "https://github.com/jazibaskari",
    videoLight: ArchitextDark,
    videoDark: ArchitextLight,
  },
  {
    id: "4",
    title: "Desktop RPG Game",
    subtitle: "Sweet Escape",
    summary:
      "A React and Typescript-based desktop RPG game, featuring a rich storyline with retro pixel graphics. Step into the shoes of a supermarket employee surviving a chaotic night shift after the inventory chutes malfunction. To escape before the boss locks you in overnight, you must catch falling cakes, dodge vegetables, and tackle high-stakes side quests. ",
    skills: ["UI/UX", "Data & Security", "Tooling"],
    githubUrl: "https://github.com/jazibaskari",
    liveUrl: "https://github.com/jazibaskari",
    videoLight: SweetEscapeLight,
    videoDark: SweetEscapeDark,
  },
  {
    id: "5",
    title: "RPG Underscore",
    subtitle: "Sugar Rush",
    summary:
      "An underscore for my 'Sweet Escape' RPG, created using Strudel. It draws inspiration from the delicate arrangements of 'Sparkle' by Tom Howe (featured heavily in the Great British Bake Off series), utilising delayed kalimbas and bells to craft a light yet tension-driven atmosphere.",
    skills: ["Frontend", "Testing"],
    githubUrl: "https://github.com/jazibaskari",
    liveUrl: "https://github.com/jazibaskari",
    videoLight: SugarRushLight,
    videoDark: SugarRushDark,
  },
];
