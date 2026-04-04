import type { Skill } from "../types/skill";
export const skills: Skill[] = [
    { id: "frontend", label: "Frontend", description: "Modern, reactive user interfaces built with the latest frameworks.", skills: ["React", "Next.js", "Javascript (ES6+)", "TypeScript", "Vite", "HTML5", "CSS3"], color: "#5ec2de" },
    { id: "uiux", label: "UI/UX",  description: "Clean design systems and smooth motion experiences.", skills: ["Figma", "CSS", "Sass", "Tailwind", "Material UI", "Framer Motion"], color: "#BF616A" },
    { id: "tooling", label: "Tooling", description: "Streamlined development workflows and deployment.", skills: ["ESLint", "Prettier", "npm/Yarn/pnpm", "Webpack", "Git", "Docker", "Azure", "AWS",  "GitHub Actions", "Vercel", "Netlify"], color: "#EBCB8B" },
    { id: "data & state", label: "Data & Security",  description: "Efficient state management and data flow architecture.", skills: ["Redux", "React Query", "Context API", "Jotai", "REST APIs", "Axios", "Authentication (OAuth, JWT)"], color: "action.hover" },
    { id: "testing", label: "Testing",  description: "Ensuring high-quality code through robust QA testing.", skills: [ "Jest", "React Testing Library", "Chrome DevTools", "Playwright", "Cypress", "Postman"], color: "#D08770" },
     { id: "extras", label: "Extras",  description: "Ensuring high-quality code through robust QA testing.", skills: [ "Python", "3D Slicer"], color: "#81A1C1" },
  ];
