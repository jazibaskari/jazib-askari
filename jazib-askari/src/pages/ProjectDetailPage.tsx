import { Box, Typography, Container, Button } from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import { projects } from "../data/projects";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import GitBreadcrumb from "../components/GitBreadcrumb";
import { skills } from "../data/skill";

const defaultColor =
  skills.find((s) => s.id === "frontend")?.color || "#5ccfe6";

const ProjectDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const project = projects.find(
    (p) => p.subtitle.toLowerCase().replace(/\s+/g, "-") === id
  );

  if (!project) {
    return (
      <Container sx={{ py: 8 }}>
        <Typography variant="h2">Project not found</Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Box sx={{ mb: 4, display: "flex", justifyContent: "flex-start" }}>
        <Button
          variant="text"
          disableRipple
          startIcon={<ArrowBackIcon />}
          onClick={() => navigate(-1)}
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
      <Box sx={{ position: "relative" }}>
        <Typography variant="h2"> {project.subtitle.toLowerCase()} </Typography>
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
              {
                label: project.subtitle.toLowerCase(),
                path: `/projects/${id}`,
              },
            ]}
          />
        </Box>
      </Box>

      <Typography variant="h5">{project.title.toLowerCase()}</Typography>

      <Typography
        variant="body1Montreal"
        sx={{
          color: "#bfc0c0",
          fontWeight: 500,
          mt: 2,
          mb: 2,
          display: "flex",
          alignItems: "center",
        }}
      >
        {/* {project.date instanceof Date
          ? project.date
              .toLocaleDateString("en-GB", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })
              .toLocaleLowerCase()
          : project.date} */}

        {project.type.toLowerCase()}
        {`, ${project.readTime}`}
      </Typography>

      {/* <Typography
        variant="body1Montreal"
        sx={{
          color: "text.secondary",
          fontWeight: 500,
          lineHeight: 1.6,
          maxWidth: "800px",
        }}
      >
        {project.summary}
      </Typography> */}

      <Box
        sx={{
          height: "3px",
          width: "100%",
          backgroundColor: "background.paper",
          mb: 6,
          mt: 4,
        }}
      />

      <Box sx={{ mt: 6 }}>
        <Typography
          variant="body1Montreal"
          sx={{
            color: "text.secondary",
            fontWeight: 500,
            lineHeight: 1.6,
            maxWidth: "800px",
          }}
        >
          {project.summary}
        </Typography>

        <Box sx={{ mt: 6 }}>
          <Typography variant="h3" gutterBottom>
            ideation
          </Typography>
        </Box>
        <Typography
          variant="body1Montreal"
          sx={{ lineHeight: 1.8, fontWeight: 500 }}
        >
          {project.ideationText}
        </Typography>
      </Box>

      <Box sx={{ mt: 6 }}>
        <Typography variant="h3" gutterBottom>
          software architecture
        </Typography>
        <Box sx={{ my: 4, p: 4, borderRadius: 2 }}>
          <Typography
            variant="body1Montreal"
            sx={{ lineHeight: 1.8, fontWeight: 500 }}
          >
            Diagrams for {project.title} will be displayed here.
          </Typography>
        </Box>
      </Box>

      <Box sx={{ mt: 6 }}>
        <Typography variant="h3" gutterBottom>
          key considerations
        </Typography>
        <Typography
          variant="body1Montreal"
          sx={{ lineHeight: 1.8, fontWeight: 500 }}
        >
          {project.testingText}
        </Typography>
      </Box>
    </Container>
  );
};

export default ProjectDetailPage;
