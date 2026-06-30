import { Box, Typography, Container, Button, Stack } from "@mui/material";
import DisclaimerSection from "../components/disclaimer/DisclaimerSection";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { useParams, useNavigate } from "react-router-dom";
import { projects } from "../data/projects";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import GitBreadcrumb from "../components/breadcrumb/GitBreadcrumb";
import GitBreadcrumbHorizontal from "../components/breadcrumb/GitBreadcrumbHorizontal";
import { skills } from "../data/skill";
import TextAnimation from "../animations/AnimatedText";
import ideationImage from "../assets/images/PortfolioIdeation_1.png";
import { useTheme } from "@mui/material";
const defaultColor =
  skills.find((s) => s.id === "frontend")?.color || "#5ccfe6";

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

const ProjectDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const theme = useTheme();
  const project = projects.find(
    (p) => p.subtitle.toLowerCase().replace(/\s+/g, "-") === id
  );

  if (!project) {
    return (
      <Container maxWidth="md" sx={{ py: 8 }}>
        <Typography variant="h2">this project doesn't exist</Typography>
      </Container>
    );
  }

  const imgSource =
    theme.palette.mode === "dark"
      ? project.arcImageDark
      : project.arcImageLight;

  const breadcrumbItems = [
    { label: "home", path: "/" },
    { label: "projects", path: "/projects" },
    {
      label: project.subtitle.toLowerCase(),
      path: `/projects/${id}`,
    },
  ];

  return (
    <Container
      maxWidth="md"
      sx={{
        py: { xs: 4, md: 8 },
      }}
    >
      <Box
        sx={{
          mb: { xs: 2, md: 4 },
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
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

        {/* Mobile */}
        <Box
          sx={{
            display: { xs: "block", md: "none" },
            pt: { xs: 4 },
          }}
        >
          <GitBreadcrumbHorizontal
            color={defaultColor}
            items={breadcrumbItems}
          />
        </Box>
      </Box>

      <Box sx={{ position: "relative", pt: { xs: 4 } }}>
        <TextAnimation duration={0.6} trigger={1}>
          <Typography variant="h2">{project.subtitle.toLowerCase()}</Typography>
        </TextAnimation>

        {/* Desktop */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            right: 0,
            display: { xs: "none", md: "block" },
          }}
        >
          <GitBreadcrumb color={defaultColor} items={breadcrumbItems} />
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
        {project.type.toLowerCase()}
        {`, ${project.readTime}`}
      </Typography>

      {/* Mobile */}
      <Typography
        variant="body1Montreal"
        sx={{
          color: "text.secondary",
          fontWeight: 500,
          lineHeight: 1.6,
          maxWidth: "800px",
          display: { xs: "block", md: "none" },
          mb: 2,
        }}
      >
        {project.summary}
      </Typography>

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
        {/* Desktop */}
        <Typography
          variant="body1Montreal"
          sx={{
            color: "text.secondary",
            fontWeight: 500,
            lineHeight: 1.6,
            maxWidth: "800px",
            display: { xs: "none", md: "block" },
          }}
        >
          {project.summary}
        </Typography>

        <Box sx={{ mt: 6 }}>
          <Typography variant="h3" gutterBottom>
            ideation
          </Typography>
        </Box>
        <Stack direction="row" spacing={4} sx={{ mb: 2, mt: 2 }}>
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
        </Stack>
        <Typography
          variant="body1Montreal"
          sx={{ lineHeight: 1.8, fontWeight: 500, whiteSpace: "pre-line" }}
        >
          {project.ideationText}
        </Typography>
      </Box>

      <Box sx={{ mt: 6 }}>
        <Typography variant="h3" gutterBottom>
          software architecture
        </Typography>
        <Box
          sx={{
            my: 4,
            borderRadius: 2,
            overflow: "hidden",
            bgcolor: "background.paper",
          }}
        >
          <Box
            component="img"
            src={imgSource || "/placeholder-image.webp"}
            alt={`Architecture diagram for ${project.title}`}
            loading="lazy"
            sx={{
              width: "100%",
              height: "auto",
              display: "block",
            }}
          />
        </Box>
        {/* <Box sx={{ my: 4, p: 4, borderRadius: 2 }}>
          <Typography
            variant="body1Montreal"
            sx={{ lineHeight: 1.8, fontWeight: 500 }}
          >
            Diagrams for {project.title} will be displayed here.
          </Typography>
        </Box> */}
      </Box>

      <Box sx={{ mt: 6 }}>
        <Typography variant="h3" gutterBottom>
          key considerations
        </Typography>
        <Typography
          variant="body1Montreal"
          sx={{ lineHeight: 1.8, fontWeight: 500, whiteSpace: "pre-line" }}
        >
          {project.keyConsiderationsText}
        </Typography>
        <Box
          sx={{
            my: 4,
            borderRadius: 2,
            overflow: "hidden",
            bgcolor: "background.paper",
          }}
        >
          <Box
            component="img"
            src={ideationImage || "/placeholder-image.webp"}
            alt={`Architecture diagram for ${project.title}`}
            loading="lazy"
            sx={{
              width: "100%",
              height: "auto",
              display: "block",
            }}
          />
        </Box>
      </Box>
      <Box sx={{ mt: "auto" }}>
        <DisclaimerSection />
      </Box>
    </Container>
  );
};

export default ProjectDetailPage;
