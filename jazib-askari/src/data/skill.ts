import type { Skill } from "../types/skill";
export const skills: Skill[] = [
    { id: "frontend", label: "Frontend", description: "Modern, reactive user interfaces built with the latest frameworks.", skills: ["React", "Next.js", "TypeScript"], color: "#55b7b5" },
    { id: "data", label: "Data",  description: "Efficient state management and data flow architecture.", skills: ["Redux", "Zustand"], color: "#88C0D0" },
    { id: "uiux", label: "UI/UX",  description: "Clean design systems and smooth motion experiences.", skills: ["MUI", "Framer"], color: "#BF616A" },
    { id: "testing", label: "Testing",  description: "Ensuring high-quality code through robust QA testing.", skills: ["Jest", "Cypress"], color: "#D08770" },
    { id: "tooling", label: "Tooling", description: "Streamlined development workflows and deployment.", skills: ["Git", "Docker"], color: "#EBCB8B" },
  ];
