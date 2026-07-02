import { useState, useRef, useLayoutEffect } from "react";
import Section from "../shared/Section";
import { Typography, Box, Chip, IconButton, Button } from "@mui/material";
import TextAnimation from "../../animations/AnimatedText";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { useNavigate } from "react-router-dom";
import { experiences } from "../../data/experience";
import { skills } from "../../data/skill";
import type { Experience } from "../../types/experience";

interface ExperienceSectionProps {
  trigger: number;
}

interface ExperienceCardProps {
  exp: Experience & { location?: string; website?: string };
  trigger: number;
  index: number;
  getTagColor: (tag: string) => string;
}

const ExperienceItem = ({
  exp,
  trigger,
  index,
  getTagColor,
}: ExperienceCardProps) => {
  const shadowRef = useRef<HTMLDivElement>(null);
  const [page, setPage] = useState(0);
  const [maxPage, setMaxPage] = useState(0);

  const rowHeight = 28;
  const gap = 8;
  const rowsPerPage = 3;
  const visibleHeight = rowHeight * rowsPerPage + gap * (rowsPerPage - 1);
  const arrowBoxHeight = 48;

  useLayoutEffect(() => {
    const calculate = () => {
      if (shadowRef.current) {
        const fullHeight = shadowRef.current.scrollHeight;
        const calculatedMax =
          Math.ceil((fullHeight + gap) / (visibleHeight + gap)) - 1;
        setMaxPage(calculatedMax > 0 ? calculatedMax : 0);
      }
    };
    const resizeObserver = new ResizeObserver(calculate);
    if (shadowRef.current) resizeObserver.observe(shadowRef.current);
    calculate();
    return () => resizeObserver.disconnect();
  }, [visibleHeight, exp.tags]);

  const renderChips = () =>
    exp.tags.map((tag: string) => {
      const baseColor = getTagColor(tag);

      return (
        <Chip
          key={tag}
          label={
            <Typography
              variant="body1Montreal"
              sx={{ fontSize: "0.85rem", lineHeight: 1, fontWeight: 500 }}
            >
              {tag}
            </Typography>
          }
          sx={{
            bgcolor: "background.paper",
            color: baseColor,
            px: 1,
            // height: `${rowHeight}px`,
            height: "28px",
            ml: "0 !important",
          }}
        />
      );
    });

  const displayWebsite =
    exp.website ||
    `www.${exp.subtitle.toLowerCase().replace(/[^a-z0-9]/g, "")}.com`;

  return (
    <TextAnimation trigger={trigger} delay={index * 0.15}>
      <Typography
        variant="h4"
        sx={{ color: "text.primary", mb: { xs: 3, md: 4 } }}
      >
        {exp.subtitle}
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: 4, md: 6 },
          width: "100%",
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", md: "35%" },
            display: "flex",
            flexDirection: "column",
            gap: 1,
          }}
        >
          <Typography
            variant="body1"
            sx={{ color: "text.primary", fontWeight: 500 }}
          >
            {exp.dates}
          </Typography>
          <Typography variant="body1" sx={{ color: "text.secondary" }}>
            {exp.title}
          </Typography>

          <Box
            component="a"
            href={
              displayWebsite.startsWith("http")
                ? displayWebsite
                : `https://${displayWebsite}`
            }
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: "text.secondary",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              width: "fit-content",
              fontSize: "1rem",
              mt: 0.5,
              position: "relative",
              pb: "4px",
              "&:hover": { color: "text.primary" },
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
            }}
          >
            <Box component="span">{displayWebsite}</Box>
            <ArrowOutwardIcon sx={{ fontSize: "0.95rem", ml: "5px" }} />
          </Box>
        </Box>
        <Box
          sx={{
            width: { xs: "100%", md: "65%" },
            display: "flex",
            flexDirection: "column",
            gap: 3,
            mb: "20px",
          }}
        >
          <Typography
            variant="body1Montreal"
            sx={{
              color: "text.secondary",
              lineHeight: 1.8,
              fontWeight: 500,
              fontSize: "1.05rem",
              whiteSpace: "pre-line",
            }}
          >
            {exp.description}
          </Typography>

          <Box sx={{ position: "relative", width: "100%" }}>
            <Box
              ref={shadowRef}
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: `${gap}px`,
                position: "absolute",
                visibility: "hidden",
                width: "100%",
                zIndex: -1,
              }}
            >
              {renderChips()}
            </Box>
            <Box
              sx={{
                height: maxPage > 0 ? `${visibleHeight}px` : "auto",
                overflow: "hidden",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: `${gap}px`,
                  transition: "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
                  transform: `translateY(-${page * (visibleHeight + gap)}px)`,
                }}
              >
                {renderChips()}
              </Box>
            </Box>

            {maxPage > 0 && (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  mt: 1,
                  height: `${arrowBoxHeight}px`,
                  alignItems: "center",
                }}
              >
                <IconButton
                  disableRipple
                  onClick={() => setPage((p) => (p >= maxPage ? 0 : p + 1))}
                  sx={{
                    width: "30px",
                    height: "30px",
                    p: 0,
                    "&:hover": {},
                  }}
                >
                  {page < maxPage ? (
                    <ArrowDownwardIcon fontSize="small" />
                  ) : (
                    <ArrowUpwardIcon fontSize="small" />
                  )}
                </IconButton>
              </Box>
            )}
          </Box>
        </Box>
      </Box>
    </TextAnimation>
  );
};

const ExperienceSection = ({ trigger }: ExperienceSectionProps) => {
  const navigate = useNavigate();

  const getTagColor = (tagName: string) => {
    const category = skills.find(
      (cat) =>
        cat.skills.some((s) => s.toLowerCase() === tagName.toLowerCase()) ||
        cat.label.toLowerCase() === tagName.toLowerCase()
    );
    return category ? category.color : "action.hover";
  };
  const displayedExperiences = experiences.slice(0, 6);

  return (
    <Section id="experience">
      <Box sx={{ mb: 4 }}>
        <TextAnimation duration={0.6} trigger={trigger}>
          <Typography variant="h3">experience</Typography>
        </TextAnimation>
        <TextAnimation duration={1.5} trigger={trigger}>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "repeat(2, minmax(140px, 1fr))",
                md: "repeat(3, minmax(140px, 1fr))",
              },
              gridTemplateRows: {
                xs: "repeat(3, auto)",
                md: "repeat(2, auto)",
              },
              gap: 2,
              mt: 2,
              width: "100%",
              maxWidth: "520px",
            }}
          >
            {skills
              .filter((category) => category.id !== "multimedia")
              .map((category) => (
                <Box
                  key={category.label}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1.2,
                  }}
                >
                  <Box
                    sx={{
                      width: 12,
                      height: 12,
                      borderRadius: "50%",
                      bgcolor: category.color,
                      flexShrink: 0,
                    }}
                  />

                  <Typography
                    variant="body1"
                    sx={{
                      fontWeight: 500,
                      // fontSize: "0.9rem",
                      // lineHeight: 1,
                      color: "text.secondary",
                    }}
                  >
                    {category.label}
                  </Typography>
                </Box>
              ))}
          </Box>
        </TextAnimation>
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column" }}>
        {displayedExperiences.map((exp, index) => (
          <Box key={exp.id} sx={{ pt: { xs: 6, md: 4 } }}>
            <ExperienceItem
              exp={exp}
              trigger={trigger}
              index={index}
              getTagColor={getTagColor}
            />
          </Box>
        ))}
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "flex-start",
          mt: 4,
        }}
      >
        <Button
          disableRipple
          variant="text"
          endIcon={<ArrowForwardIcon />}
          onClick={() => navigate("/")}
          sx={(theme) => ({
            ...theme.typography.body1,
            textTransform: "none",
            disableRipple: true,
            py: 2,
            minWidth: 0,
            color: "text.primary",
            transition: "color 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
            "&:hover": {
              backgroundColor: "transparent",
              color: "text.tertiary",
              "& .MuiButton-endIcon": {
                transform: "translateX(6px)",
                transition: "transform 0.3s ease",
              },
            },
          })}
        >
          View Curriculum Vitae
        </Button>
      </Box>
    </Section>
  );
};

export default ExperienceSection;
