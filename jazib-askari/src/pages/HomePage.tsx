import React from "react";
import HomeSection from "../components/home/HomeSection";
import AboutSection from "../components/about/AboutSection";
import Section from "../components/shared/Section";
import ProjectCard from "../components/projects/ProjectCard";
import { Project } from "../types/project";

const projects: Project[] = [
  { id: "1", title: "Project One", summary: "Summary One", details: "Details One" },
  { id: "2", title: "Project Two", summary: "Summary Two", details: "Details Two" },
];

const HomePage: React.FC = () => (
  <>
    <HomeSection />
    <AboutSection />
    <Section id="projects">
      <h2>Projects</h2>
      {projects.map((p) => (
        <ProjectCard key={p.id} project={p} />
      ))}
    </Section>
  </>
);

export default HomePage;