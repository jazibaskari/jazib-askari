import { Box, Typography, Stack, Chip, IconButton, Tooltip } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import type { Project } from "../../types/project";
interface Props {
  project: Project;
}
const ProjectTabContent = ({ project }: Props) => {
  return (
    <Box
      sx={{
        p: { xs: 4, md: 6, lg: 8 },
        width: "100%",
        boxSizing: "border-box",
        borderRadius: { xs: "0px", md: "24px" },
        backgroundColor: "#f7f7f7",
        minHeight: "450px",
        display: "flex",
        flexDirection: { xs: "column-reverse", md: "row" }, 
        gap: { xs: 4, md: 6 },
        alignItems: "center",
        position: "relative",
      }}
    >
      <Box sx={{ flex: 1, width: "100%" }}>
        <Typography variant="h3" sx={{ mb: 2, fontWeight: "bold" }}>
          {project.title}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "text.secondary",
            lineHeight: 1.8,
            fontSize: "1.15rem",
            mb: 4,
          }}
        >
          {project.summary}
        </Typography>
        <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ gap: 1.5 }}>
          {project.skills?.map((skill) => (
            <Chip
              key={skill}
              label={skill}
              sx={{
                bgcolor: "white",
                fontWeight: 600,
                fontSize: "0.9rem",
                height: "36px",
              }}
            />
          ))}
        </Stack>
      </Box>
      <Box 
        sx={{ 
          flex: 1, 
          width: "100%", 
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end" 
        }}
      >
        <Stack
          direction="row"
          spacing={2}
          sx={{
            mb: 2, 
          }}
        >
          {project.githubUrl && (
            <Tooltip title="View Code">
              <IconButton
                href={project.githubUrl}
                target="_blank"
                sx={{
                  bgcolor: "white",
                  borderRadius: "50%",
                  width: 48,
                  height: 48,
                  color: "primary.main",
                  "&:hover": { bgcolor: "white", transform: "translateY(-2px)" },
                  transition: "all 0.3s ease",
                }}
              >
                <GitHubIcon />
              </IconButton>
            </Tooltip>
          )}
          {project.liveUrl && (
            <Tooltip title="Live Preview">
              <IconButton
                href={project.liveUrl}
                target="_blank"
                sx={{
                  bgcolor: "white",
                  borderRadius: "50%",
                  width: 48,
                  height: 48,
                  color: "primary.main",
                  "&:hover": { bgcolor: "white", transform: "translateY(-2px)" },
                  transition: "all 0.3s ease",
                }}
              >
                <LaunchIcon />
              </IconButton>
            </Tooltip>
          )}
        </Stack>
        <Box
          component="img"
          src={project.image}
          alt={project.title}
          sx={{
            width: "100%",
            height: { xs: "250px", md: "350px" },
            objectFit: "cover",
            borderRadius: "20px",
            backgroundColor: "#fff" 
          }}
        />
      </Box>
    </Box>
  );
};
export default ProjectTabContent;