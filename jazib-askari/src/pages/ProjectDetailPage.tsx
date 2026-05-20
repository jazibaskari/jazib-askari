import { Box, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { projects } from "../data/projects";
const ProjectDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);
  if (!project) {
    return (
      <Box>
        <Typography variant="h2">Project not found</Typography>
      </Box>
    );
  }
  return (
    <Box>
      <Typography variant="h3" gutterBottom>
        {project.title}
      </Typography>
    </Box>
  );
};
export default ProjectDetailPage;
