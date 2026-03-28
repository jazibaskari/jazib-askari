import HomeSection from "../components/home/HomeSection";
import AboutSection from "../components/about/AboutSection";
import Section from "../components/shared/Section";
import ProjectCard from "../components/projects/ProjectCard";
import { projects } from "../data/projects";

const HomePage = () => (
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