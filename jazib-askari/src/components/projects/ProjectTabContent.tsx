import { Box, Typography, Stack, Chip, IconButton, Tooltip } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import type { Project } from "../../types/project";
import Photo from "../../assets/images/Photo.png";

interface Props {
  project: Project;
}

const ProjectTabContent = ({ project }: Props) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        width: "100%",
        alignItems: "stretch", 
        gap: { xs: 2, md: 4 },
        mt: 0, 
      }}
    >
      <Box
        sx={{
          flex: 1,
          bgcolor: "background.paper",
          p: { xs: 4, md: 6 },
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start", 
          borderRadius: "24px",
        }}
      >
        <Stack direction="row" spacing={2} sx={{ mb: 3 }}>
          {project.githubUrl && (
            <Tooltip title="View Code">
              <IconButton
                href={project.githubUrl}
                target="_blank"
                sx={{
                  bgcolor: "action.hover",
                  width: 48,
                  height: 48,
                  "&:hover": { bgcolor:"primary.main", transform: "translateY(-2px)" },
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
                  bgcolor: "action.hover",
                  width: 48,
                  height: 48,
                  "&:hover": { bgcolor:"primary.main", transform: "translateY(-2px)" },
                  transition: "all 0.3s ease",
                }}
              >
                <LaunchIcon />
              </IconButton>
            </Tooltip>
          )}
        </Stack>

        <Typography
          variant="body1"
          sx={{
            color: "text.grey",
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
                bgcolor: "action.hover",
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
          bgcolor: "none",
          p: 0, 
          borderRadius: "24px",
          overflow: "hidden",
          display: "flex",
        }}
      >
        <Box
          component="img"
          src={Photo} 
          alt={project.title}
          sx={{
            width: "100%",
            height: "100%", 
            // minHeight: { xs: "200px", md: "200px" },
            maxHeight: { xs: "300px", md: "300px" },
            objectFit: "cover",
            objectPosition: "50% 40%",
          }}
        />
      </Box>
    </Box>
  );
};

export default ProjectTabContent;
