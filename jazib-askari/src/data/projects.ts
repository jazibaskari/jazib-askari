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
import SweetEscapeImage from "../assets/images/SweetEscapeImage.png";
import PortfolioImageDark from "../assets/images/PortfolioImageDark.png";
import PortfolioImageLight from "../assets/images/PortfolioImageLight.png";
import BudgyImageDark from "../assets/images/BudgyImageDark.png";
import BudgyImageLight from "../assets/images/BudgyImageLight.png";
import ArchitextImageLight from "../assets/images/ArchitextImage.png";
import SugarRushImageLight from "../assets/images/SugarRushLight.png";
import PortfolioArcImageLight from "../assets/images/PortfolioArchitectureLight.png";
import PortfolioArcImageDark from "../assets/images/PortfolioArchitectureDark.png";
import PortfolioIdeationImageLight from "../assets/images/PortfolioIdeation_1.png";
import PortfolioIdeationImageDark from "../assets/images/PortfolioIdeation_1.png";

export const projects: Project[] = [
  {
    id: "1",
    title: "Portfolio Website",
    subtitle: "Jazib Askari",
    date: new Date("2026-03-11"),
    readTime: "15 minute read",
    summary:
      "This portfolio website was built using React, Typescript and Material UI. It features a clean and minimal design, showcasing my projects, skills, and experience in an intentional and digestible way. The website is fully responsive, ensuring a seamless experience across all devices.",
    skills: [
      "Frontend",
      "UI/UX",
      "Data & Security",
      "Testing",
      "Tooling",
      "Backend",
    ],
    githubUrl: "https://github.com/jazibaskari/jazib-askari",
    liveUrl: "https://jazibaskari.com",
    videoLight: PortfolioDark,
    videoDark: PortfolioLight,
    imageLight: PortfolioImageDark,
    imageDark: PortfolioImageLight,
    arcImageLight: PortfolioArcImageLight,
    arcImageDark: PortfolioArcImageDark,
    ideationImageDark: PortfolioIdeationImageLight,
    ideationImageLight: PortfolioIdeationImageDark,
    ideationImageCaption: "Screenshot of Vercel's 'Speed Insights' dashboard.",
    type: "Personal project",
    keyConsiderationsText:
      "My data-driven portfolio is built with React to ensure component modularity and Material UI for a consistent, accessible design system. Integrating Firebase was the first step in securely capturing interaction data, such as page clicks, without relying on third-party analytics. React's lazy loading was implemented to keep bundle sizes low. Knowing that my portfolio would be media-heavy, I was focused on a solution that prevented bottlenecks on all devices without adding unnecessary DevOps overhead. \n\n I planned my architecture around Vercel's built-in CDN, which provides a fast, enterprise-grade foundation through global edge delivery, automatic cache invalidation, and a streamlined development experience.  \n\n  Implementing Vercel Agent's Speed Insights enabled real-time, production telemetry that validated my mobile asset optimisations by proving the portfolio consistently maintained optimal Core Web Vitals scores under real-world conditions.",
    ideationText:
      "Most modern portfolios are static, offering little to no insight into user engagement. I wanted to move beyond a digital CV-style portfolio and create a dynamic application that provides real-time updates on user interest, allowing me to iterate based on feedback and keep users engaged from the moment they land on the page.",
  },
  {
    id: "2",
    title: "Software Architecture Diagram Generator",
    subtitle: "Architext",
    readTime: "15 minute read",
    summary:
      "A headless script that turns JSON files into instantly-downloadable, high-level software architecture diagrams using a consistent design system. A single source of truth is maintained through repeatable, version-controlled diagram generation, with architectural changes tracked throughout development lifecycles.",
    skills: ["UI/UX", "Data & Security", "Tooling"],
    githubUrl: "https://github.com/jazibaskari/architext",
    liveUrl: "https://github.com/jazibaskari/architext",
    videoLight: ArchitextDark,
    videoDark: ArchitextLight,
    type: "Personal project",
    imageLight: ArchitextImageLight,
    imageDark: ArchitextImageLight,
  },
  {
    id: "3",
    title: "Desktop RPG Game",
    subtitle: "Sweet Escape",
    readTime: "15 minute read",
    summary:
      "A React and Typescript-based desktop RPG game, featuring a rich storyline with retro pixel graphics. Step into the shoes of a supermarket employee surviving a chaotic night shift after the inventory chutes malfunction. To escape before the boss locks you in overnight, you must catch falling cakes, dodge vegetables, and tackle high-stakes side quests. ",
    skills: ["UI/UX", "Data & Security", "Tooling"],
    githubUrl: "https://github.com/jazibaskari/sweet-escape",
    liveUrl: "https://github.com/jazibaskari/sweet-escape",
    videoLight: SweetEscapeLight,
    videoDark: SweetEscapeDark,
    type: "Personal project",
    imageLight: SweetEscapeImage,
    imageDark: SweetEscapeImage,
  },
  {
    id: "4",
    title: "Finance Dashboard",
    subtitle: "Budgy",
    readTime: "15 minute read",
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
    imageLight: BudgyImageDark,
    imageDark: BudgyImageLight,
    type: "Personal project",
  },
  {
    id: "5",
    title: "RPG Underscore",
    subtitle: "Sugar Rush",
    readTime: "15 minute read",
    summary:
      "An underscore for my 'Sweet Escape' RPG, created using Strudel. It draws inspiration from the delicate arrangements of 'Sparkle' by Tom Howe (featured heavily in the Great British Bake Off series), using delayed kalimbas and bells to craft a light yet tension-driven atmosphere.",
    skills: ["Frontend", "Testing"],
    githubUrl: "https://github.com/jazibaskari/sweet-escape-underscore",
    liveUrl: "https://github.com/jazibaskari/sweet-escape-underscore",
    videoLight: SugarRushLight,
    videoDark: SugarRushDark,
    type: "Personal project",
    imageLight: SugarRushImageLight,
    imageDark: SugarRushImageLight,
  },
];
