import Section from "../shared/Section";
import { Box, Typography } from "@mui/material";
import ProjectCard from "./ProjectCard";
import { projects } from "../../data/projects";
import TextAnimation from "../../animations/AnimatedText";

interface ProjectsSectionProps {
    trigger: number;
  }

  const ProjectsSection = ({ trigger }: ProjectsSectionProps) => (

<Section id="Projects">
<Box sx={{ maxWidth: "900px" }}>
<TextAnimation duration={0.6} trigger={trigger}>
  <Typography variant="h2" gutterBottom>
    Projects
  </Typography>
</TextAnimation>
<TextAnimation duration={1} trigger={trigger}>
  {projects.map((p) => (
    <ProjectCard key={p.id} project={p} />
  ))}
</TextAnimation>
</Box>
</Section>
);

export default ProjectsSection;