import { Box, Typography, Container, Button, Chip } from "@mui/material";
import { useTheme } from "@mui/material";
import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import type { Project } from "../../types/project";
import DisclaimerSection from "../disclaimer/DisclaimerSection";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CheckIcon from "@mui/icons-material/Check";
import { projects } from "../../data/projects";
import { skills } from "../../data/skill";
import TextAnimation from "../../animations/AnimatedText";
import GitBreadcrumb from "../breadcrumb/GitBreadcrumb";
import GitBreadcrumbHorizontal from "../breadcrumb/GitBreadcrumbHorizontal";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
interface ProjectCardProps {
  project: Project;
}

const defaultColor =
  skills.find((s) => s.id === "frontend")?.color || "#5ccfe6";

const ProjectCard = ({ project }: ProjectCardProps) => {
  const navigate = useNavigate();
  const projectSlug = project.subtitle.toLowerCase().replace(/\s+/g, "-");
  const theme = useTheme();
  const imgSource =
    theme.palette.mode === "dark" ? project.imageDark : project.imageLight;

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
        sx={{
          height: "3px",
          width: "100%",
          backgroundColor: "background.paper",
          mb: 1,
          mt: 2,
        }}
      />

      <Box
        onClick={() => navigate(`/projects/${projectSlug}`)}
        sx={{
          border: (theme) => `3px solid ${theme.palette.background.paper}`,
          width: "100%",
          borderRadius: "6px",
          overflow: "hidden",
          display: "flex",
          position: "relative",
          bgcolor: "background.paper",
          cursor: "pointer",
          transition: "opacity 0.3s ease",
          "&:hover": {
            opacity: 0.85,
            "& img": {
              filter: "grayscale(0%)",
            },
          },
        }}
      >
        <Box
          component="img"
          src={imgSource || "/placeholder-image.jpg"}
          alt={project.title || project.subtitle}
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "#2c2c2c",
            opacity: 0.1,
            mixBlendMode: "screen",
            pointerEvents: "none",
          }}
        />
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
        <Typography
          variant="h2"
          sx={{
            fontWeight: 500,
            fontSize: "1.5rem",
            // mb: 1,
            color: "text.primary",
            lineHeight: 1.3,
          }}
        >
          {project.subtitle.toLowerCase() || project.id}
        </Typography>
        <Typography
          variant="h5"
          sx={{
            fontWeight: 500,
            fontSize: "1.2rem",
            mb: 1,
            color: "#bfc0c0",
            lineHeight: 1.3,
          }}
        >
          {project.title.toLowerCase() || project.id}
        </Typography>

        <Typography
          variant="body1Montreal"
          sx={{
            color: "text.secondary",
            lineHeight: 1.8,
            fontSize: "1.05rem",
            fontWeight: 500,
            mb: 1,
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {project.summary}
        </Typography>

        {/* <Typography
          variant="body1Montreal"
          sx={{
            color: "#bfc0c0",
            // color: defaultColor,
            fontSize: "0.85rem",
            fontWeight: 500,
            mt: "auto",
            display: "flex",
            alignItems: "center",
          }}
        >
          {project.type}, {project.readTime}
        </Typography> */}
        <Typography
          variant="body1Montreal"
          sx={{
            fontSize: "0.85rem",
            // fontSize: "1.05rem",
            fontWeight: 500,

            display: "flex",
            alignItems: "center",
          }}
        >
          {/* <Box component="span" sx={{ color: "#bfc0c0" }}>
            {project.title},
          </Box> */}
          <Box
            component="a"
            href={`/projects/${projectSlug}`}
            // target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: "text.secondary",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              width: "fit-content",
              fontSize: "1rem",
              position: "relative",
              pb: "4px",
              "&:hover": { color: "text.primary" },
              "&::after": {
                content: '""',
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "100%",
                height: "3px",
                bgcolor: "background.paper",
                transition: "opacity 0.3s ease",
              },
              "&::before": {
                content: '""',
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "100%",
                height: "3px",
                bgcolor: "text.primary",
                transform: "scaleX(0)",
                transformOrigin: "left",
                transition: "transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
                zIndex: 1,
              },
              "&:hover::before": {
                transform: "scaleX(1)",
              },
            }}
          >
            <Box component="span">{project.readTime}</Box>
            <ArrowOutwardIcon sx={{ fontSize: "0.95rem", ml: "5px" }} />
          </Box>

          {/* <Box component="span" sx={{ color: "text.primary", ml: 0.5 }}>
            {project.readTime}
          </Box> */}
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
      <Container
        maxWidth="md"
        sx={{
          py: { xs: 4, md: 8 },
        }}
      >
        <Box
          sx={{
            mb: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
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

          <Box
            sx={{
              display: { xs: "block", md: "none" },
              pt: { xs: 4 },
            }}
          >
            <GitBreadcrumbHorizontal
              color={defaultColor}
              items={[
                { label: "home", path: "/" },
                { label: "projects", path: "/projects" },
              ]}
            />
          </Box>
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
          {/* mt: 2 + 22px  */}
          <Box sx={{ position: "relative", pt: { xs: "38px" } }}>
            <TextAnimation duration={0.6} trigger={1}>
              <Typography variant="h2">projects archive</Typography>
            </TextAnimation>
          </Box>

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
                    fontWeight: 500,
                    bgcolor: isSelected
                      ? `${skillColor}20`
                      : "background.paper",
                    color: skillColor,
                    px: 1,
                    height: "28px",
                    ml: "0 !important",
                    // border: isSelected
                    //   ? `3px solid ${skillColor}50`
                    //   : "3px solid transparent",
                    // transition: "all 0.2s ease",
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
              md: "repeat(3, 1fr)",
            },
            gap: { xs: 4, md: 6 },
          }}
        >
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </Box>

        <Box sx={{ mt: "auto" }}>
          <DisclaimerSection />
        </Box>
      </Container>
    </>
  );
};

export default ProjectsArchivePage;
