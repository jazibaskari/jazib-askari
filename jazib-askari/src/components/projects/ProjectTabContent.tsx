import { Box, Typography, Stack, Chip } from "@mui/material";
import type { Project } from "../../types/project";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { skills } from "../../data/skill";
import { useRef, useEffect } from "react";
import { useTheme } from "@mui/material";

interface Props {
  project: Project;
  trigger: number;
}

const ProjectTabContent = ({ project }: Props) => {
  const theme = useTheme();
  const videoRef = useRef<HTMLVideoElement>(null);

  const videoSource =
    theme.palette.mode === "dark" ? project.videoDark : project.videoLight;

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch((error) => {
        console.log("Autoplay prevented:", error);
      });
    }
  }, [project.id]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.code === "Space") {
        event.preventDefault();
        if (videoRef.current) {
          if (videoRef.current.paused) {
            videoRef.current.play();
          } else {
            videoRef.current.pause();
          }
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const getTagColor = (tagName: string) => {
    const category = skills.find(
      (cat) =>
        cat.skills.some((s) => s.toLowerCase() === tagName.toLowerCase()) ||
        cat.label.toLowerCase() === tagName.toLowerCase()
    );
    return category ? category.color : "action.hover";
  };

  const linkButtonStyle = {
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
      {/* Video */}
      {videoSource && (
        <Box
          key={project.id}
          sx={{
            width: "100%",
            borderRadius: "24px",
            overflow: "hidden",
            display: "flex",
            position: "relative",
          }}
        >
          <Box
            component="video"
            src={videoSource}
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            sx={{
              width: "100%",
              height: "auto",
              maxHeight: { xs: "300px", md: "450px" },
              objectFit: "cover",
              display: "block",
            }}
          />
        </Box>
      )}
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
              sx={linkButtonStyle}
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
              sx={linkButtonStyle}
            >
              Launch{" "}
              <ArrowOutwardIcon sx={{ fontSize: "0.95rem", ml: "1px" }} />
            </Box>
          )}
          {/* <Box
            onClick={() => navigate(`/projects/${project.id}`)}
            sx={{ ...linkButtonStyle, cursor: "pointer" }}
          >
            Case Study{" "}
            <ArrowOutwardIcon sx={{ fontSize: "0.95rem", ml: "1px" }} />
          </Box> */}
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
