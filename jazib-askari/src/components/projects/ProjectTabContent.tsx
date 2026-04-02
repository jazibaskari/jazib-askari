import { Box, Typography, Stack, Chip, IconButton, Tooltip } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import type { Project } from "../../types/project";
import Photo from "../../assets/images/Photo.png";
import { useTheme } from '@mui/material/styles';
import TextAnimation from "../../animations/AnimatedText";
interface Props {
  project: Project;
  trigger: number;
}
const ProjectTabContent = ({ project, trigger }: Props) => {
  const theme = useTheme();
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
          p: 4, 
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
                  width: 44, 
                  height: 44,
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
                  width: 44,
                  height: 44,
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
            color: "text.secondary",
            lineHeight: 1.8,
            fontSize: "1.1rem",
            mb: 4,
          }}
        >
          {project.summary}
        </Typography>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
          {project.skills?.map((skill) => (
            <Chip
              key={skill}
              label={skill}
              sx={{
                ...theme.typography.h4,
                py: 2, 
                px: 1,
                bgcolor: "action.hover",
                fontSize: "0.9rem",
                height: "28px",
                ml: "0 !important"
              }}
            />
          ))}
        </Box>
      </Box>
      <Box
        sx={{
          flex: 1,
          borderRadius: "24px",
          overflow: "hidden",
          display: "flex",
        }}
      >
        <TextAnimation duration={1.2} trigger={trigger}>
          <Box
          component="img"
          src={Photo} 
          alt={project.title}
          sx={{
            width: "100%",
            height: "100%", 
            maxHeight: { xs: "300px", md: "400px" },
            objectFit: "cover",
          }}
        />
        </TextAnimation>
      </Box>
    </Box>
  );
};
export default ProjectTabContent;