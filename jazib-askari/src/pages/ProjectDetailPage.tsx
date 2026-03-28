import { Box, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { projects } from "../data/projects";
const ProjectDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);
  if (!project) {
    return (
      <Box sx={{ p: 6 }}>
        <Typography variant="h2">Project not found</Typography>
      </Box>
    );
  }
  return (
    <Box sx={{ p: 6, maxWidth: "900px", mx: "auto" }}>
      <Typography variant="h1" gutterBottom>
        {project.title}
      </Typography>
      <Typography variant="body1" sx={{ mt: 2 }}>
        {project.details}
      </Typography>
    </Box>
  );
};
export default ProjectDetailPage;