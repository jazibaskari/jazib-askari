import { useState, useRef, useEffect, useCallback } from "react";
import type { SyntheticEvent } from "react";
import Section from "../shared/Section";
import { Box, Typography, Tabs, Tab, Button, IconButton } from "@mui/material";
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
  const [showScrollButton, setShowScrollButton] = useState(false);
  const navigate = useNavigate();
  const tabsRef = useRef<HTMLDivElement>(null);

  const checkScrollPosition = useCallback(() => {
    const scroller = tabsRef.current?.querySelector(".MuiTabs-scroller");
    if (scroller) {
      const { scrollLeft, scrollWidth, clientWidth } = scroller as HTMLElement;
      setShowScrollButton(
        scrollWidth > clientWidth && scrollLeft + clientWidth < scrollWidth - 5
      );
    }
  }, []);

  useEffect(() => {
    const scroller = tabsRef.current?.querySelector(".MuiTabs-scroller");
    if (scroller) {
      scroller.addEventListener("scroll", checkScrollPosition);
      window.addEventListener("resize", checkScrollPosition);
      requestAnimationFrame(() => {
        checkScrollPosition();
      });
    }
    return () => {
      scroller?.removeEventListener("scroll", checkScrollPosition);
      window.removeEventListener("resize", checkScrollPosition);
    };
  }, [checkScrollPosition]);

  const handleChange = (_event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleScrollRight = () => {
    const scroller = tabsRef.current?.querySelector(".MuiTabs-scroller");
    if (scroller) {
      scroller.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  return (
    <Section id="projects">
      <Box>
        <TextAnimation duration={0.6} trigger={trigger}>
          <Typography variant="h3">projects</Typography>
        </TextAnimation>

        <Box sx={{ width: "100%", mt: 4 }}>
          <Box sx={{ mb: 3, display: "flex", alignItems: "center" }}>
            <Box ref={tabsRef} sx={{ flexGrow: 1, overflow: "hidden" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons={false}
                aria-label="project tabs"
                sx={{
                  "& .MuiTabs-flexContainer": { justifyContent: "flex-start" },
                  "& .MuiTabs-indicator": { display: "none" },
                }}
              >
                {projects.map((p, index) => (
                  <Tab
                    key={p.id}
                    label={p.subtitle}
                    id={`project-tab-${index}`}
                    aria-controls={`project-tabpanel-${index}`}
                    disableRipple
                    sx={(theme) => ({
                      ...theme.typography.body1,
                      textTransform: "none",
                      fontSize: "1.1rem",
                      minWidth: 0,
                      p: 0,
                      mr: 4,
                      pb: "6px",
                      alignItems: "flex-start",
                      textAlign: "left",
                      position: "relative",
                      color: "text.secondary",
                      backgroundColor: "transparent",
                      outline: 0,
                      "&.Mui-selected": { color: "text.primary" },
                      "&::before": {
                        content: '""',
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        width: "100%",
                        height: "3px",
                        bgcolor: "text.opp",
                        transform: "scaleX(0)",
                        transformOrigin: "left",
                        transition:
                          "transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
                        willChange: "transform",
                        backfaceVisibility: "hidden",
                        zIndex: 1,
                      },
                      "&:not(.Mui-selected):hover::before": {
                        transform: "scaleX(1)",
                      },
                      "&.Mui-selected::before": {
                        transform: "scaleX(1)",
                        bgcolor: "text.opp",
                      },
                    })}
                  />
                ))}
              </Tabs>
            </Box>
            {showScrollButton && (
              <IconButton
                onClick={handleScrollRight}
                sx={{
                  display: { xs: "flex", md: "none" },
                  ml: 1,
                  color: "text.primary",
                  transition: "color 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
                  "&:hover": {
                    backgroundColor: "transparent",
                    color: "text.tertiary",
                    "& .MuiSvgIcon-root": {
                      transform: "translateX(6px)",
                      transition: "transform 0.3s ease",
                    },
                  },
                }}
              >
                <ArrowForwardIcon />
              </IconButton>
            )}
          </Box>

          <Box sx={{ width: "100%", minHeight: { xs: "auto", md: "400px" } }}>
            {projects.map((p, index) => (
              <div
                role="tabpanel"
                hidden={value !== index}
                id={`project-tabpanel-${index}`}
                aria-labelledby={`project-tab-${index}`}
                key={p.id}
                style={{
                  width: "100%",
                  display: value === index ? "block" : "none",
                }}
              >
                {value === index && (
                  <ProjectTabContent project={p} trigger={trigger + value} />
                )}
              </div>
            ))}
          </Box>

          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "flex-start",
              mt: 2,
            }}
          >
            <Button
              variant="text"
              endIcon={<ArrowForwardIcon />}
              onClick={() => navigate("/projects")}
              sx={(theme) => ({
                ...theme.typography.body1,
                textTransform: "none",
                disableRipple: true,
                py: 2,
                minWidth: 0,
                color: "text.primary",
                transition: "color 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
                "&:hover": {
                  backgroundColor: "transparent",
                  color: "text.tertiary",
                  "& .MuiButton-endIcon": {
                    transform: "translateX(6px)",
                    transition: "transform 0.3s ease",
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
