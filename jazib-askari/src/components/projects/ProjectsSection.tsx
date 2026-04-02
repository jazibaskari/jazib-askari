import { useState } from "react";
import type { SyntheticEvent } from "react";
import Section from "../shared/Section";
import { Box, Typography, Tabs, Tab, Button } from "@mui/material";
import { projects } from "../../data/projects";
import TextAnimation from "../../animations/AnimatedText";
import ProjectTabContent from "./ProjectTabContent";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useNavigate } from "react-router-dom";

interface ProjectsSectionProps {
  trigger: number;
}

const ProjectsSection = ({ trigger }: ProjectsSectionProps) => {
  const [value, setValue] = useState(0);
  const navigate = useNavigate();

  const handleChange = (_event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Section id="Projects">
      <Box sx={{ width: "100%" }}>
        <TextAnimation duration={0.6} trigger={trigger}>
          <Typography variant="h2" gutterBottom sx={{ pl: 0 }}>
            Projects
          </Typography>
        </TextAnimation>

        <Box sx={{ width: "100%", mt: 4 }}>
          <Box sx={{ mb: 3 }}>
            <Tabs
              value={value}
              onChange={handleChange}
              variant="scrollable"
              scrollButtons="auto"
              aria-label="project tabs"
              sx={{
                '& .MuiTabs-flexContainer': {
                  justifyContent: 'flex-start',
                }
              }}
            >
              {projects.map((p, index) => (
                <Tab
                  key={p.id}
                  label={p.subtitle} 
                  id={`project-tab-${index}`}
                  aria-controls={`project-tabpanel-${index}`}
                  sx={(theme) => ({
                    ...theme.typography.body1,
                    textTransform: "none",
                    fontSize: "1.1rem",
                    minWidth: 0,
                    p: 0,
                    mr: 4, 
                    alignItems: 'flex-start',
                    textAlign: 'left',
                  })}
                />
              ))}
            </Tabs>
          </Box>

          <Box sx={{ width: "100%" }}>
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
                    {/* <TextAnimation duration={0.5} trigger={value}> */}
                      <ProjectTabContent project={p} trigger={value} />
                    {/* </TextAnimation> */}
                  </Box>
                )}
              </div>
            ))}
          </Box>

          <Box 
            sx={{ 
              width: "100%", 
              display: "flex", 
              justifyContent: "flex-start", 
              mt: 3 
            }}
          >
            <Button
              variant="text"
              endIcon={<ArrowForwardIcon />}
              onClick={() => navigate("/projects")}
              sx={(theme) => ({
                ...theme.typography.body1, 
                textTransform: "none",
                p: 0, 
                minWidth: 0,
                color: "text.primary",
                transition: "all 0.3s ease",
                "&:hover": {
                  backgroundColor: "transparent",
                  color: "text.tertiary",
                  "& .MuiButton-endIcon": {
                    transform: "translateX(6px)", 
                  },
                },
              })}
            >
              View All Projects
            </Button>
          </Box>
        </Box>
      </Box>
    </Section>
  );
};

export default ProjectsSection;