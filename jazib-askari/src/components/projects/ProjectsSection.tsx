import { useState} from "react";
import type { SyntheticEvent } from "react";
import Section from "../shared/Section";
import { Box, Typography, Tabs, Tab } from "@mui/material";
import { projects } from "../../data/projects";
import TextAnimation from "../../animations/AnimatedText";
import ProjectTabContent from "./ProjectTabContent";
interface ProjectsSectionProps {
  trigger: number;
}
const ProjectsSection = ({ trigger }: ProjectsSectionProps) => {
  const [value, setValue] = useState(0);
  const handleChange = (_event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Section id="Projects">
      <Box sx={{ width: "100%" }}>
        <TextAnimation duration={0.6} trigger={trigger}>
          <Typography variant="h2" gutterBottom sx={{ pl: { xs: 2, md: 4 } }}>
            Projects
          </Typography>
        </TextAnimation>
        <Box sx={{ width: "100%", mt: 4 }}>
          <Box sx={{  mb: 3, px: { xs: 2, md: 4 } }}>
            <Tabs
              value={value}
              onChange={handleChange}
              variant="scrollable"
              scrollButtons="auto"
              aria-label="project tabs"
            >
              {projects.map((p, index) => (
                <Tab
                  key={p.id}
                  label={p.subtitle}
                  id={`project-tab-${index}`}
                  aria-controls={`project-tabpanel-${index}`}
                  sx={{
                    fontWeight: "bold",
                    textTransform: "none",
                    fontSize: "1.1rem",
                    mr: 2,
                  }}
                />
              ))}
            </Tabs>
          </Box>
          {projects.map((p, index) => (
            <div
              role="tabpanel"
              hidden={value !== index}
              id={`project-tabpanel-${index}`}
              aria-labelledby={`project-tab-${index}`}
              key={p.id}
              style={{ width: "100%" }}
            >
              {value === index && (
                <Box sx={{ width: "100%" }}>
                  <TextAnimation duration={0.5} trigger={value}>
                    <ProjectTabContent project={p} />
                  </TextAnimation>
                </Box>
              )}
            </div>
          ))}
        </Box>
      </Box>
    </Section>
  );
};
export default ProjectsSection;