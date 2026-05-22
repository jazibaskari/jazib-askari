import { Box, Typography, Stack, Chip } from "@mui/material";
import type { Project } from "../../types/project";
import { useTheme } from "@mui/material/styles";
import TextAnimation from "../../animations/AnimatedText";
import PortfolioLight from "../../assets/images/PortfolioLight.png";
import PortfolioDark from "../../assets/images/PortfolioDark.png";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { skills } from "../../data/skill";

interface Props {
  project: Project;
  trigger: number;
}

const ProjectTabContent = ({ project, trigger }: Props) => {
  const theme = useTheme();

  const getTagColor = (tagName: string) => {
    const category = skills.find(
      (cat) =>
        cat.skills.some((s) => s.toLowerCase() === tagName.toLowerCase()) ||
        cat.label.toLowerCase() === tagName.toLowerCase()
    );
    return category ? category.color : "action.hover";
  };

  const animatedLinkStyles = {
    display: "inline-flex",
    alignItems: "center",
    gap: "4px",
    color: "text.primary",
    textDecoration: "none",
    position: "relative",
    pb: "6px",
    fontSize: "1.05rem",
    fontWeight: 500,
    cursor: "pointer",
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
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        gap: 3,
      }}
    >
      {/* Image */}
      <Box
        sx={{
          width: "100%",
          borderRadius: "24px",
          overflow: "hidden",
          display: "flex",
          position: "relative",
          cursor: "pointer",
          "&:hover img": {
            transform: "scale(1.05)",
          },
        }}
      >
        <TextAnimation
          key={project.id}
          duration={1.2}
          trigger={trigger}
          style={{ width: "100%" }}
        >
          <Box
            component="img"
            src={theme.palette.mode === "dark" ? PortfolioDark : PortfolioLight}
            alt={project.title}
            sx={{
              width: "100%",
              height: "auto",
              maxHeight: { xs: "300px", md: "450px" },
              objectFit: "cover",
              display: "block",
              transition: "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          />
        </TextAnimation>
      </Box>

      {/* Text */}
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          borderRadius: "24px",
        }}
      >
        {/* Buttons */}
        <Stack direction="row" spacing={4} sx={{ mb: 4 }}>
          {project.githubUrl && (
            <Box
              component="a"
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              sx={animatedLinkStyles}
            >
              GitHub{" "}
              <ArrowOutwardIcon sx={{ fontSize: "0.95rem", ml: "1px" }} />
            </Box>
          )}
          {project.liveUrl && (
            <Box
              component="a"
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              sx={animatedLinkStyles}
            >
              Launch{" "}
              <ArrowOutwardIcon sx={{ fontSize: "0.95rem", ml: "1px" }} />
            </Box>
          )}
        </Stack>

        <Typography
          variant="body1Montreal"
          sx={{
            color: "text.secondary",
            lineHeight: 1.8,
            fontSize: "1.1rem",
            fontWeight: 500,
            mb: 3,
          }}
        >
          {project.summary}
        </Typography>

        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
          {project.skills?.map((skill) => {
            const bgColor = getTagColor(skill);

            return (
              <Chip
                key={skill}
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
                  bgcolor: "background.paper",
                  color: bgColor,
                  px: 1,
                  height: "28px",
                  ml: "0 !important",
                }}
              />
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default ProjectTabContent;
