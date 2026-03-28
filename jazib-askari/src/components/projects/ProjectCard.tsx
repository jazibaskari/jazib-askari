import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import type { Project } from "../../types/project";

interface Props {
  project: Project;
}

const ProjectCard = ({ project }: Props) => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        border: 1,
        borderColor: "grey.300",
        borderRadius: 2,
        p: 2,
        mb: 4,
        cursor: "pointer",
        "&:hover": { boxShadow: 4 },
      }}
      onClick={() => navigate(`/projects/${project.id}`)}
    >
      <Typography variant="h6">{project.title}</Typography>
      <Typography variant="body2">{project.summary}</Typography>
    </Box>
  );
};

export default ProjectCard;