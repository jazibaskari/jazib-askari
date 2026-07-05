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
import SweetEscapeImage from "../assets/images/SweetEscapeImage.png";
import SweetEscapeIdeation from "../assets/images/SweetEscapeIdeation.png";
import SweetEscapeIdeationDebug from "../assets/images/SweetEscapeIdeationDebug.png";
import SweetEscapeDemo from "../assets/videos/SweetEscapeCaseStudyDemo.mp4";
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
    readTime: "5 minute read",
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
    specificSkills: [
      "React",
      "Typescript",
      "Vite",
      "CSS",
      "MaterialUI",
      "ESLint",
      "Prettier",
      "npm/Yarn/pnpm",
      "Vercel",
      "PostHog",
      "Context API",
      "Firebase",
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
    ideationContent: [
      {
        type: "text",
        content:
          "Most modern portfolios are static, offering little to no insight into user engagement. I wanted to move beyond a digital CV-style portfolio and create a dynamic application that provides real-time updates on user interest, allowing me to iterate based on feedback and keep users engaged from the moment they land on the page.",
      },
      {
        type: "image",
        srcDark: PortfolioImageLight,
        srcLight: PortfolioImageDark,
        caption: "Figure 1: Screenshot of the portfolio's home page.",
      },
    ],
    keyConsiderationsContent: [
      {
        type: "text",
        content:
          "My data-driven portfolio is built with React to ensure component modularity and Material UI for a consistent, accessible design system. Integrating Firebase was the first step in securely capturing interaction data, such as page clicks, without relying on third-party analytics. React's lazy loading was implemented to keep bundle sizes low. Knowing that my portfolio would be media-heavy, I was focused on a solution that prevented bottlenecks on all devices without adding unnecessary DevOps overhead.",
      },
      {
        type: "image",
        srcDark: PortfolioIdeationImageDark,
        srcLight: PortfolioIdeationImageDark,

        caption: "Figure 2: Screenshot of Vercel's 'Speed Insights' dashboard.",
      },
      {
        type: "text",
        content:
          "I planned my architecture around Vercel's built-in CDN, which provides a fast, enterprise-grade foundation through global edge delivery, automatic cache invalidation, and a streamlined development experience.",
      },
      {
        type: "code",
        content: `import { SpeedInsights } from "@vercel/speed-insights/react";`,
        language: "tsx",
      },
      {
        type: "text",
        content:
          "Implementing Vercel Agent's speed insights enabled real-time, production telemetry that validated my mobile asset optimisations by proving consistently maintained optimal core web vitals scores under real-world conditions.",
      },
    ],
    keyConsiderationsText:
      "My data-driven portfolio is built with React to ensure component modularity and Material UI for a consistent, accessible design system. Integrating Firebase was the first step in securely capturing interaction data, such as page clicks, without relying on third-party analytics. React's lazy loading was implemented to keep bundle sizes low. Knowing that my portfolio would be media-heavy, I was focused on a solution that prevented bottlenecks on all devices without adding unnecessary DevOps overhead. \n\n I planned my architecture around Vercel's built-in CDN, which provides a fast, enterprise-grade foundation through global edge delivery, automatic cache invalidation, and a streamlined development experience. \n\n  Implementing Vercel Agent's speed insights enabled real-time, production telemetry that validated my mobile asset optimisations by proving the portfolio consistently maintained optimal core web vitals scores under real-world conditions.",
    ideationText:
      "Most modern portfolios are static, offering little to no insight into user engagement. I wanted to move beyond a digital CV-style portfolio and create a dynamic application that provides real-time updates on user interest, allowing me to iterate based on feedback and keep users engaged from the moment they land on the page.",
  },
  {
    id: "2",
    title: "Architecture Diagram Generator",
    subtitle: "Architext",
    readTime: "5 minute read",
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
    specificSkills: [
      "React",
      "React Flow",
      "Typescript",
      "CSS",
      "Puppeteer",
      "Node.js",
      "ESLint",
      "Prettier",
      "npm/Yarn/pnpm",
      "Vercel",
      "GitHub Actions",
    ],
    ideationContent: [
      {
        type: "text",
        content:
          "Software architecture diagrams often become obsolete the moment they're exported. Teams struggle with the UI tax (wasting hours manually fiddling with GUIs). Since manual updates are tedious, developers often skip them, leading to documentation drift, onboarding confusion, and stale system design reviews.",
      },
      {
        type: "image",
        srcDark: ArchitextImageLight,
        srcLight: ArchitextImageLight,
        caption: "Figure 1: Screenshot of an output architecture diagram.",
      },
      {
        type: "text",
        content:
          "Architext treats documentation with the same rigor as the codebase Defining software architecture in a clean, declarative JSON schema means that it lives directly within the codebase. Architecture as Code (AoC) allows for iterations to be tracked through version control with a single source of truth. Headless architecture allows for seamless integration into deployment pipelines. This means that every time a developer pushes changes to the schema, the engine can automatically lint the design, generate the latest diagram, and update the project documentation with minimal effort.",
      },
    ],
    keyConsiderationsContent: [
      {
        type: "text",
        content:
          "I maintained a consistent diagram ouptut by enforcing a strict design language through centralisation of styles in a `THEME_COLOURS` matrix This helps avoid the visual noise common in manually created diagrams, where inconsistent elements such as font sizes and colours degrade readability.",
      },
      {
        type: "text",
        content:
          "I enforced geometric determinism whereby components are locked to a defined `COL_WIDTH` and `ROW_HEIGHT` grid. This forces automatic uniform spacing and alignment, ensuirng the diagram remains visually balanced and readable, even as the architecture evolves.",
      },
      {
        type: "text",
        content:
          "The system uses quadratic bezier curves with calculated `ARCH_HEIGHT` offsets to ensure that connection lines between ndes arch cleanly around components, avoiding any intersecting lines or obscure node labels.",
      },
    ],
  },
  {
    id: "3",
    title: "Desktop RPG Game",
    subtitle: "Sweet Escape",
    readTime: "5 minute read",
    summary:
      "A React and Typescript-based desktop RPG game, featuring a rich storyline with retro pixel graphics. Step into the shoes of a supermarket employee surviving a chaotic night shift after the inventory chutes malfunction. To escape before the boss locks you in overnight, you must catch falling cakes, dodge vegetables, and tackle high-stakes side quests. ",
    skills: ["UI/UX", "Data & Security", "Tooling"],
    githubUrl: "https://github.com/jazibaskari/sweet-escape",
    liveUrl: "https://github.com/jazibaskari/sweet-escape",
    videoLight: SweetEscapeDark,
    videoDark: SweetEscapeDark,
    ideationContent: [
      {
        type: "text",
        content:
          "Building a feature-rich, top-down 2D RPG natively inside a modern web browser seemed daunting at first, especially when deciding to bypass game engines in favour of building a lean, performant rendering layer from scratch.",
      },
      {
        type: "text",
        content:
          "Using Tiled, I created my game map from a 32px-by-32px tile grid divided into distinct functional layers. These layers consisted of tile layers (the game UI) and object layers (collision boxes to define collision zones and entity waypoints).",
      },
      {
        type: "image",
        srcDark: SweetEscapeIdeationDebug,
        srcLight: SweetEscapeIdeationDebug,
        caption: "Figure 1: Screenshot of Kaplay's 'Debug Mode'.",
      },
      {
        type: "text",
        content:
          "Exporting these configurations to a single JSON file enabled dynamic map fetching during scene initialisation, achieving highly efficient load states in my game.",
      },
      {
        type: "image",
        srcDark: SweetEscapeIdeation,
        srcLight: SweetEscapeIdeation,
        caption: "Figure 2: Screenshot of Tiled game map.",
      },
    ],
    keyConsiderationsContent: [
      {
        type: "text",
        content:
          "A core technical hurdle was designing the game to accommodate varying viewport scales without relying on rigid canvas dimensions, which created borders along the edges of the game map. I resized my map to 2000px-by-2000px and integrated an engine-level camera utility to follow the player entities coordinates, resulting in a fluid visual experience with smooth camera movement.",
      },
      {
        type: "video",
        srcDark: SweetEscapeDemo,
        srcLight: SweetEscapeDemo,
        caption: "Figure 3: Sweet Escape game play demo.",
      },
      {
        type: "text",
        content:
          "To build an interactive environment, I designed a specialised Waypoints system that relies on custom coordinate arrays explicitly defined in my JSON map. With added proximity triggers, the NPC entities face the player entity whenever theyre within a certain distance of their bounding box.",
      },
    ],

    type: "Personal project",
    imageLight: SweetEscapeImage,
    imageDark: SweetEscapeImage,
    specificSkills: [
      "React",
      "Typescript",
      "Vite",
      "Kaplay",
      "Tiled",
      "CSS",
      "Framer Motion",
      "Jotai",
      "Puppeteer",
      "Node.js",
      "ESLint",
      "Prettier",
      "npm/Yarn/pnpm",
      "Vercel",
    ],
  },
  {
    id: "4",
    title: "Finance Dashboard",
    subtitle: "Budgy",
    readTime: "5 minute read",
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
    specificSkills: [
      "React",
      "Typescript",
      "Vite",
      "Tailwind CSS",
      "Recharts",
      "Lucide React",
      "CSS",
      "Framer Motion",
      "Node.js",
      "Express.js",
      "Azure Cosmos DB",
      "Mongo DB",
      "Axios",
      "Context API",
      "ESLint",
      "Prettier",
      "npm/Yarn/pnpm",
      "Vercel",
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
    readTime: "5 minute read",
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
    ideationContent: [
      {
        type: "text",
        content:
          "The goal was to craft a frantic yet whimsical energy for my light but tension-driven RPG game. By utilising rapid, ascending arpeggios, I created a shimmmering texture that mirrors the chaos of the game.",
      },
      {
        type: "image",
        srcDark: SugarRushImageLight,
        srcLight: SugarRushImageLight,
        caption:
          "Figure 1: Screenshot of the underscore playing in Strudel REPL.",
      },
      {
        type: "text",
        content:
          "Sugar Rush draws direct inspiration from Tom Howe's 'Sparkle. I featured high-register frequencies and the lydian mode (raised 4th note) to reimagine such a delicate arrangement to fit a retro, pixel-art game. ",
      },
      {
        type: "text",
        content:
          "To keep the track engaging, I designed a 16-bar looping structure that builds intensity and unravels like a story. The cat() function extends the melodic phrases, allowing the song to evolve beyond the initial loop.",
      },
    ],
    keyConsiderationsContent: [
      {
        type: "text",
        content:
          "Translating orchestral instruments into a digital synthesis was a significant hurdle. I replaced Howe's glockenspiel with a kalimba to maintain a similar timbre, and used a synth triangle wave for a pizzicato-style plucking. This helped create a much cleaner, sharper sound profile.",
      },
      {
        type: "text",
        content:
          "Unlike static audio files, I used .mask() to procedurally keep high-energy layers that use bell chimes and high-pass filtered hi-hats quiet until the second half of the track. This algorithmic approach helped create a high-intensity build-up that signals urgency to the player. ",
      },
      {
        type: "text",
        content:
          "Since the underscore was algorithmically generated rather than organically unfolding, it offers perfect synchronisation with game events, turning the music into a responsive game mechanic that enhances the player's experience, rather than a passive background element.",
      },
    ],
    specificSkills: [
      "React",
      "Typescript",
      "Strudel",
      "ESLint",
      "Prettier",
      "npm/Yarn/pnpm",
    ],
  },
];
