import { Box, Typography } from "@mui/material";
import HomeSection from "../components/home/HomeSection";
import AboutSection from "../components/about/AboutSection";
import Section from "../components/shared/Section";
import ProjectCard from "../components/projects/ProjectCard";
import { projects } from "../data/projects";

const HomePage = () => (
  <>
    <HomeSection />
    <AboutSection />

    <Section id="Projects">
      <Box sx={{ maxWidth: "900px" }}>
        <Typography variant="h2" gutterBottom>
          Projects
        </Typography>

        <Typography variant="body1" sx={{ mb: 4 }}>
          A selection of work showcasing my experience in frontend development and data-focused projects.
        </Typography>

        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </Box>
    </Section>
  </>
);

export default HomePage;