import { useState, useEffect } from "react";
import { Box, Typography, Container, Button, Stack, Chip } from "@mui/material";
import DisclaimerSection from "../components/disclaimer/DisclaimerSection";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { useParams, useNavigate } from "react-router-dom";
import { projects } from "../data/projects";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import GitBreadcrumb from "../components/breadcrumb/GitBreadcrumb";
import GitBreadcrumbHorizontal from "../components/breadcrumb/GitBreadcrumbHorizontal";
import { skills } from "../data/skill";
import TextAnimation from "../animations/AnimatedText";
import { useTheme } from "@mui/material";
import CodeBlockDemo from "../components/codeblock/CustomCodeBlock";

interface TextBlock {
  type: "text";
  content: string;
}

interface ImageBlock {
  type: "image";
  src?: string;
  srcDark?: string;
  srcLight?: string;
  caption?: string;
}

interface VideoBlock {
  type: "video";
  src?: string;
  srcDark?: string;
  srcLight?: string;
  caption?: string;
}

interface CodeBlock {
  type: "code";
  content: string;
  language: string;
}

type ContentBlock = TextBlock | ImageBlock | CodeBlock | VideoBlock;

interface PullRequest {
  id: number;
  title: string;
  html_url: string;
  date: string;
}

interface GitChangelogProps {
  githubUrl?: string;
  color: string;
}

const codeBlockWrapperStyle = {
  backgroundColor: "background.paper",
  color: "text.primary",
  padding: "20px",
  borderRadius: "8px",
  fontSize: "0.8rem",
  whiteSpace: "pre",
  overflowX: "auto",
  my: 2,
};

const renderTextWithInlineCode = (text: string) => {
  const parts = text.split(/(`[^`]+`)/g);
  return parts.map((part, index) => {
    if (part.startsWith("`") && part.endsWith("`")) {
      return (
        <Box
          key={index}
          component="code"
          sx={{
            fontFamily: "monospace",
            backgroundColor: "background.paper",
            color: "#5ccfe6",
            padding: "2px 6px",
            borderRadius: "4px",
            fontSize: "0.9em",
            fontWeight: 500,
            mx: "2px",
          }}
        >
          {part.slice(1, -1)}
        </Box>
      );
    }
    return part;
  });
};

const GitChangelog = ({ githubUrl, color }: GitChangelogProps) => {
  const [prs, setPrs] = useState<PullRequest[]>([]);

  useEffect(() => {
    if (!githubUrl) return;

    const match = githubUrl.match(/github\.com\/([^/]+)\/([^/]+)/);
    if (!match) return;

    const owner = match[1];
    const repo = match[2].replace(/\.git$/, "");

    const fetchPRs = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/repos/${owner}/${repo}/pulls?state=closed&sort=updated&per_page=100`
        );
        if (!response.ok) return;
        const data = await response.json();

        if (Array.isArray(data)) {
          const filtered = data
            .filter((pr) => {
              const isMerged = pr.merged_at !== null;
              const isFeature = pr.title.toLowerCase().startsWith("feat");
              return isMerged && isFeature;
            })
            .slice(0, 3)
            .map((pr) => {
              const dateObj = new Date(pr.merged_at || pr.closed_at);
              const formattedDate = dateObj.toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              });

              return {
                id: pr.id,
                title: pr.title.replace(/\s+/g, "-"),
                html_url: pr.html_url,
                date: formattedDate,
              };
            });
          setPrs(filtered);
        }
      } catch (error) {
        console.error("Failed to fetch changelog:", error);
      }
    };

    fetchPRs();
  }, [githubUrl]);

  if (prs.length === 0) return null;

  return (
    <Box sx={{ mt: 6, mb: 4, width: "100%" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: { xs: "flex-start", md: "space-between" },
          alignItems: { xs: "flex-start", md: "center" },
          mb: 4,
          gap: { xs: 2, md: 0 },
        }}
      >
        <Typography variant="h3" sx={{ mb: 0 }}>
          changelog
        </Typography>
        <Box
          component="a"
          href={`${githubUrl}/pulls?q=is%3Apr+is%3Aclosed`}
          target="_blank"
          rel="noopener noreferrer"
          sx={linkButtonStyle}
        >
          View all changes{" "}
          <ArrowOutwardIcon sx={{ fontSize: "0.95rem", ml: "1px" }} />
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          position: "relative",
          width: "100%",
          overflowX: "auto",
          pb: 2,
          pt: 1,
          gap: 2,
          "&::-webkit-scrollbar": { display: "none" },
          msOverflowStyle: "none",
          scrollbarWidth: "none",
        }}
      >
        {prs.map((pr, index) => (
          <Box
            key={pr.id}
            sx={{
              display: "flex",
              flexDirection: "column",
              flex: 1,
              minWidth: "220px",
              maxWidth: "280px",
              position: "relative",
            }}
          >
            <Box
              sx={{
                position: "relative",
                height: "24px",
                display: "flex",
                alignItems: "center",
                mb: 2,
              }}
            >
              <Box
                sx={{
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  border: `2px solid ${color}`,
                  bgcolor: "background.default",
                  zIndex: 1,
                  position: "relative",
                  flexShrink: 0,
                }}
              />
              {index < prs.length - 1 && (
                <Box
                  sx={{
                    position: "absolute",
                    left: "12px",
                    right: "-16px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    height: "2px",
                    bgcolor: color,
                    zIndex: 0,
                  }}
                />
              )}
            </Box>

            <Typography
              component="a"
              href={pr.html_url}
              target="_blank"
              rel="noopener noreferrer"
              variant="body1Montreal"
              sx={{
                color: "text.primary",
                fontWeight: 500,
                fontSize: "0.95rem",
                textDecoration: "none",
                textTransform: "lowercase",
                lineHeight: 1.4,
                display: "-webkit-box",
                WebkitLineClamp: 3,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                transition: "color 0.2s ease",
                "&:hover": { color: color },
              }}
            >
              {pr.title}
            </Typography>

            <Typography
              sx={{
                variant: "body1Montreal",
                color: "text.secondary",
                fontWeight: 500,
                fontSize: "0.85rem",
                textTransform: "lowercase",
              }}
            >
              {pr.date}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

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
  WebkitTapHighlightColor: "transparent",
  "&:focus": {
    outline: "none",
  },
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
  "&:hover::before": { transform: "scaleX(1)" },
};

const ProjectDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const theme = useTheme();
  const project = projects.find(
    (p) => p.subtitle.toLowerCase().replace(/\s+/g, "-") === id
  );

  const getTagColor = (tagName: string) => {
    const category = skills.find(
      (cat) =>
        cat.skills.some((s) => s.toLowerCase() === tagName.toLowerCase()) ||
        cat.label.toLowerCase() === tagName.toLowerCase()
    );
    return category ? category.color : "action.hover";
  };

  if (!project) {
    return (
      <Container maxWidth="md" sx={{ py: 8 }}>
        <Typography variant="h2">this project doesn't exist</Typography>
      </Container>
    );
  }

  const breadcrumbItems = [
    { label: "home", path: "/" },
    { label: "projects", path: "/projects" },
    { label: project.subtitle.toLowerCase(), path: `/projects/${id}` },
  ];

  return (
    <Container maxWidth="md" sx={{ py: { xs: 4, md: 8 } }}>
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
        <Box sx={{ display: { xs: "block", md: "none" }, pt: { xs: 4 } }}>
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
          fontWeight: 500,
          mt: 2,
          mb: 2,
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box component="span" sx={{ color: "#bfc0c0" }}>
          {project.readTime}
        </Box>
      </Typography>
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
        {project.specificSkills && project.specificSkills.length > 0 && (
          <Box sx={{ mt: 6 }}>
            <Typography variant="h3" gutterBottom>
              tags
            </Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
              {project.specificSkills.map((skill) => {
                const baseColor = getTagColor(skill);
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
                      color: baseColor,
                      px: 1,
                      height: "28px",
                      ml: "0 !important",
                    }}
                  />
                );
              })}
            </Box>
          </Box>
        )}
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
        {project.ideationContent && project.ideationContent.length > 0 ? (
          (project.ideationContent as ContentBlock[]).map((block, index) => (
            <Box key={index} sx={{ mb: 3 }}>
              {block.type === "text" ? (
                <Typography
                  variant="body1Montreal"
                  sx={{
                    lineHeight: 1.8,
                    fontWeight: 500,
                    whiteSpace: "pre-line",
                  }}
                >
                  {renderTextWithInlineCode(block.content)}
                </Typography>
              ) : block.type === "image" ? (
                <Box sx={{ my: 2, borderRadius: 2 }}>
                  <Box
                    component="img"
                    src={
                      theme.palette.mode === "dark"
                        ? block.srcDark || block.src
                        : block.srcLight || block.src
                    }
                    alt={block.caption || "Ideation visual"}
                    loading="lazy"
                    sx={{
                      border: (theme) =>
                        `3px solid ${theme.palette.background.paper}`,
                      width: "100%",
                      height: "auto",
                      display: "block",
                      objectFit: "cover",
                      borderRadius: 2,
                    }}
                  />
                  {block.caption && (
                    <Typography
                      variant="body1"
                      sx={{
                        color: "#bfc0c0",
                        fontWeight: 500,
                        fontSize: { xs: "0.85rem", md: "0.95rem" },
                        mt: 1,
                        px: 1,
                      }}
                    >
                      {block.caption}
                    </Typography>
                  )}
                </Box>
              ) : block.type === "video" ? (
                <Box sx={{ my: 2, borderRadius: 2 }}>
                  <Box
                    component="video"
                    autoPlay
                    loop
                    muted
                    playsInline
                    src={
                      theme.palette.mode === "dark"
                        ? block.srcDark || block.src
                        : block.srcLight || block.src
                    }
                    sx={{
                      border: (theme) =>
                        `3px solid ${theme.palette.background.paper}`,
                      width: "100%",
                      height: "auto",
                      display: "block",
                      objectFit: "cover",
                      borderRadius: 2,
                    }}
                  />
                  {block.caption && (
                    <Typography
                      variant="body1"
                      sx={{
                        color: "#bfc0c0",
                        fontWeight: 500,
                        fontSize: { xs: "0.85rem", md: "0.95rem" },
                        mt: 1,
                        px: 1,
                      }}
                    >
                      {block.caption}
                    </Typography>
                  )}
                </Box>
              ) : (
                <Box sx={codeBlockWrapperStyle}>
                  <CodeBlockDemo
                    code={block.content}
                    language={block.language}
                  />
                </Box>
              )}
            </Box>
          ))
        ) : (
          <Typography
            variant="body1Montreal"
            sx={{ lineHeight: 1.8, fontWeight: 500, whiteSpace: "pre-line" }}
          >
            {project.ideationText}
          </Typography>
        )}
      </Box>
      <Box sx={{ mt: 6 }}>
        <Typography variant="h3" gutterBottom>
          key considerations
        </Typography>

        {project.keyConsiderationsContent &&
        project.keyConsiderationsContent.length > 0 ? (
          (project.keyConsiderationsContent as ContentBlock[]).map(
            (block, index) => (
              <Box key={index} sx={{ mb: 3 }}>
                {block.type === "text" ? (
                  <Typography
                    variant="body1Montreal"
                    sx={{
                      lineHeight: 1.8,
                      fontWeight: 500,
                      whiteSpace: "pre-line",
                    }}
                  >
                    {renderTextWithInlineCode(block.content)}
                  </Typography>
                ) : block.type === "image" ? (
                  <Box sx={{ my: 2, borderRadius: 2, overflow: "hidden" }}>
                    <Box
                      component="img"
                      src={
                        theme.palette.mode === "dark"
                          ? block.srcDark || block.src
                          : block.srcLight || block.src
                      }
                      alt={block.caption || "Key consideration visual"}
                      loading="lazy"
                      sx={{
                        border: (theme) =>
                          `3px solid ${theme.palette.background.paper}`,
                        width: "100%",
                        height: "auto",
                        display: "block",
                        objectFit: "cover",
                        borderRadius: 2,
                      }}
                    />

                    {block.caption && (
                      <Typography
                        variant="body1"
                        sx={{
                          color: "#bfc0c0",
                          fontWeight: 500,
                          fontSize: { xs: "0.85rem", md: "0.95rem" },
                          mt: 1,
                          px: 1,
                        }}
                      >
                        {block.caption}
                      </Typography>
                    )}
                  </Box>
                ) : block.type === "video" ? (
                  <Box sx={{ my: 2, borderRadius: 2, overflow: "hidden" }}>
                    <Box
                      component="video"
                      autoPlay
                      loop
                      muted
                      playsInline
                      src={
                        theme.palette.mode === "dark"
                          ? block.srcDark || block.src
                          : block.srcLight || block.src
                      }
                      sx={{
                        border: (theme) =>
                          `3px solid ${theme.palette.background.paper}`,
                        width: "100%",
                        height: "auto",
                        display: "block",
                        objectFit: "cover",
                        borderRadius: 2,
                      }}
                    />

                    {block.caption && (
                      <Typography
                        variant="body1"
                        sx={{
                          color: "#bfc0c0",
                          fontWeight: 500,
                          fontSize: { xs: "0.85rem", md: "0.95rem" },
                          mt: 1,
                          px: 1,
                        }}
                      >
                        {block.caption}
                      </Typography>
                    )}
                  </Box>
                ) : (
                  <Box sx={codeBlockWrapperStyle}>
                    <CodeBlockDemo
                      code={block.content}
                      language={block.language}
                    />
                  </Box>
                )}
              </Box>
            )
          )
        ) : (
          <Typography
            variant="body1Montreal"
            sx={{ lineHeight: 1.8, fontWeight: 500, whiteSpace: "pre-line" }}
          >
            {project.keyConsiderationsText}
          </Typography>
        )}
      </Box>

      {project.githubUrl && (
        <GitChangelog githubUrl={project.githubUrl} color={defaultColor} />
      )}
      <Box sx={{ mt: "auto" }}>
        <DisclaimerSection />
      </Box>
    </Container>
  );
};

export default ProjectDetailPage;
