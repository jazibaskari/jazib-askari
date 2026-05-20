import { useState, useRef, useLayoutEffect } from "react";
import Section from "../shared/Section";
import {
  Typography,
  Box,
  Chip,
  IconButton,
  Button,
  useTheme,
} from "@mui/material";
import TextAnimation from "../../animations/AnimatedText";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
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
  const theme = useTheme();
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
      const bgColor = getTagColor(tag);
      return (
        <Chip
          key={tag}
          label={tag}
          sx={{
            ...theme.typography.h4,
            bgcolor: bgColor,
            color: bgColor === "action.hover" ? "text.primary" : "white",
            px: 1,
            fontSize: "0.85rem",
            height: `${rowHeight}px`,
            ml: "0 !important",
            "&:hover": { bgcolor: bgColor },
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
        fontWeight="bold"
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
              "&:hover": { color: "text.primary" },
            }}
          >
            <Box
              component="span"
              sx={{ textDecoration: "underline", textUnderlineOffset: "4px" }}
            >
              {displayWebsite}
            </Box>
            <Box
              component="span"
              sx={{ ml: "6px", transform: "translateY(-1px)" }}
            >
              ↗
            </Box>
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
            variant="body1"
            sx={{
              color: "text.secondary",
              lineHeight: 1.8,
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
                  onClick={() => setPage((p) => (p >= maxPage ? 0 : p + 1))}
                  sx={{
                    border: "1px solid",
                    borderColor: "divider",
                    width: "40px",
                    height: "40px",
                    p: 0,
                  }}
                >
                  {page < maxPage ? (
                    <KeyboardArrowDownIcon fontSize="small" />
                  ) : (
                    <KeyboardArrowUpIcon fontSize="small" />
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
    <Section id="Experience">
      <TextAnimation duration={0.6} trigger={trigger}>
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
          }}
        >
          Experience
        </Typography>
      </TextAnimation>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        {displayedExperiences.map((exp, index) => (
          <Box
            key={exp.id}
            sx={{
              pt: { xs: 6, md: 4 },
            }}
          >
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
        }}
      >
        <Button
          variant="text"
          endIcon={<ArrowForwardIcon />}
          onClick={() => navigate("/cv")}
          sx={(theme) => ({
            ...theme.typography.body1,
            textTransform: "none",
            p: 0,
            color: "text.quarternary",
            "&:hover": {
              backgroundColor: "transparent",
              color: "text.tertiary",
              "& .MuiButton-endIcon": { transform: "translateX(6px)" },
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
