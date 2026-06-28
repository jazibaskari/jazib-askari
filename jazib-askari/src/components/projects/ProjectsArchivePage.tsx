import {
  Box,
  Typography,
  Container,
  Button,
  Chip,
  GlobalStyles,
} from "@mui/material";
import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import type { Project } from "../../types/project";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CheckIcon from "@mui/icons-material/Check";
import { projects } from "../../data/projects";
import { skills } from "../../data/skill";
import TextAnimation from "../../animations/AnimatedText";
import GitBreadcrumb from "../GitBreadcrumb";

interface ProjectCardProps {
  project: Project;
}

const defaultColor =
  skills.find((s) => s.id === "frontend")?.color || "#5ccfe6";

const ProjectCard = ({ project }: ProjectCardProps) => {
  const navigate = useNavigate();
  const projectSlug = project.subtitle.toLowerCase().replace(/\s+/g, "-");

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        gap: 2,
      }}
    >
      <Box
        onClick={() => navigate(`/projects/${projectSlug}`)}
        sx={{
          width: "100%",
          borderRadius: "16px",
          overflow: "hidden",
          display: "flex",
          position: "relative",
          aspectRatio: "16/9",
          bgcolor: "background.paper",
          cursor: "pointer",
          transition: "opacity 0.3s ease",
          "&:hover": {
            opacity: 0.85,
          },
        }}
      >
        <Box
          component="img"
          src={project.image || "/placeholder-image.jpg"}
          alt={project.title || project.subtitle}
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
        <Typography
          variant="h5"
          sx={{
            fontWeight: 500,
            mb: 1,
            color: "text.primary",
            lineHeight: 1.3,
          }}
        >
          {project.subtitle || project.id}
        </Typography>

        <Typography
          variant="body1Montreal"
          sx={{
            color: "text.secondary",
            lineHeight: 1.8,
            fontSize: "1.05rem",
            fontWeight: 500,
            mb: 2,
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {project.summary}
        </Typography>

        <Typography
          variant="body1Montreal"
          sx={{
            color: "#bfc0c0",
            fontSize: "0.85rem",
            fontWeight: 500,
            mt: "auto",
            display: "flex",
            alignItems: "center",
          }}
        >
          {project.type} • {project.readTime}
        </Typography>
      </Box>
    </Box>
  );
};

const ProjectsArchivePage = () => {
  const navigate = useNavigate();
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

  const getTagColor = (tagName: string) => {
    const category = skills.find(
      (cat) =>
        cat.skills.some((s) => s.toLowerCase() === tagName.toLowerCase()) ||
        cat.label.toLowerCase() === tagName.toLowerCase()
    );
    return category ? category.color : "action.hover";
  };

  const allSkills = useMemo(() => {
    const skillsSet = new Set<string>();
    projects.forEach((p) => {
      if (p.skills) {
        p.skills.forEach((s) => skillsSet.add(s));
      }
    });
    return Array.from(skillsSet).sort();
  }, []);

  const filteredProjects = useMemo(() => {
    if (selectedSkills.length === 0) return projects;
    return projects.filter((p) =>
      p.skills?.some((skill) => selectedSkills.includes(skill))
    );
  }, [selectedSkills]);

  const toggleSkill = (skill: string) => {
    setSelectedSkills((prev) =>
      prev.includes(skill) ? prev.filter((s) => s !== skill) : [...prev, skill]
    );
  };

  return (
    <>
      <GlobalStyles styles={{ body: { overflowY: "scroll" } }} />

      <Container
        maxWidth="md"
        sx={{
          py: 8,
          minHeight: "100vh",
        }}
      >
        <Box sx={{ mb: 4 }}>
          <Button
            variant="text"
            disableRipple
            startIcon={<ArrowBackIcon />}
            onClick={() => navigate("/")}
            sx={(theme) => ({
              ...theme.typography.body1,
              textTransform: "none",
              py: 2,
              minWidth: 0,
              color: "text.primary",
              transition: "color 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
              "&:hover": {
                backgroundColor: "transparent",
                color: "text.tertiary",
                "& .MuiButton-startIcon": {
                  transform: "translateX(-6px)",
                  transition: "transform 0.3s ease",
                },
              },
            })}
          >
            Go back
          </Button>
        </Box>
        <Box sx={{ mb: 6, position: "relative" }}>
          <Box
            sx={{
              position: "absolute",
              top: 0,
              right: 0,
              display: { xs: "none", md: "block" },
            }}
          >
            <GitBreadcrumb
              color={defaultColor}
              items={[
                { label: "home", path: "/" },
                { label: "projects", path: "/projects" },
              ]}
            />
          </Box>

          <TextAnimation duration={0.6} trigger={1}>
            <Typography variant="h2">projects archive</Typography>
          </TextAnimation>

          <Typography variant="h5" sx={{ mb: 4 }}>
            past work, experiments, and open-source contributions
          </Typography>

          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
            {allSkills.map((skill) => {
              const isSelected = selectedSkills.includes(skill);
              const skillColor = getTagColor(skill);

              return (
                <Chip
                  key={skill}
                  onClick={() => toggleSkill(skill)}
                  icon={
                    isSelected ? (
                      <CheckIcon sx={{ fontSize: "1rem !important" }} />
                    ) : undefined
                  }
                  label={
                    <Typography
                      variant="body1Montreal"
                      sx={{
                        fontSize: "0.85rem",
                        lineHeight: 1,
                        fontWeight: 500,
                      }}
                    >
                      {skill}
                    </Typography>
                  }
                  sx={{
                    bgcolor: isSelected
                      ? `${skillColor}20`
                      : "background.paper",
                    color: skillColor,
                    px: 1,
                    height: "28px",
                    ml: "0 !important",
                    border: isSelected
                      ? `1px solid ${skillColor}50`
                      : "1px solid transparent",
                    transition: "all 0.2s ease",
                    cursor: "pointer",
                    "& .MuiChip-icon": {
                      color: skillColor,
                    },
                    "&:hover": {
                      bgcolor: `${skillColor}15`,
                    },
                  }}
                />
              );
            })}
          </Box>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(2, 1fr)",
            },
            gap: { xs: 4, md: 6 },
          }}
        >
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </Box>
      </Container>
    </>
  );
};

export default ProjectsArchivePage;
