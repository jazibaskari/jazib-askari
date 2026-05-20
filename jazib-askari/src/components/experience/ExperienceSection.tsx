import { useState, useRef, useLayoutEffect, useEffect } from "react";
import Section from "../shared/Section";
import {
  Typography,
  Box,
  Stack,
  Chip,
  IconButton,
  useTheme,
} from "@mui/material";
import TextAnimation from "../../animations/AnimatedText";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { experiences } from "../../data/expereince";
import { skills } from "../../data/skill";
import type { Experience } from "../../types/experience";

interface ExperienceSectionProps {
  trigger: number;
}

interface ExperienceCardProps {
  exp: Experience;
  trigger: number;
  index: number;
  getTagColor: (tag: string) => string;
}

const ExperienceCard = ({
  exp,
  trigger,
  index,
  getTagColor,
}: ExperienceCardProps) => {
  const theme = useTheme();
  const shadowRef = useRef<HTMLDivElement>(null);
  const [page, setPage] = useState(0);
  const [maxPage, setMaxPage] = useState(0);

  // Chip height
  const rowHeight = 28;
  const gap = 8;
  const rowsPerPage = 3;
  // Total height of 3 chip rows + 2 gaps
  const visibleHeight = rowHeight * rowsPerPage + gap * (rowsPerPage - 1);
  const arrowBoxHeight = 40;

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

  const handleVerticalScroll = () => {
    setPage((prev) => (prev >= maxPage ? 0 : prev + 1));
  };

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

  return (
    <Box sx={{ width: "100%", display: "flex" }}>
      <TextAnimation
        trigger={trigger}
        delay={index * 0.1}
        style={{ width: "100%", display: "flex" }}
      >
        <Box
          sx={{
            width: "100%",
            borderRadius: "28px",
            backgroundColor: "background.paper",
            display: "flex",
            flexDirection: "column",
            p: 4,
            pb: 2,
            boxSizing: "border-box",
            transition: "0.3s ease-in-out",
            "&:hover": {
              transform: "translateY(-8px)",
              backgroundColor: "action.hover",
            },
          }}
        >
          <Box sx={{ mb: 2 }}>
            <Typography
              variant="h3"
              fontWeight="bold"
              sx={{ color: "text.quarternary" }}
            >
              {exp.title}
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "text.tertiary", mt: 0.5 }}
            >
              {exp.subtitle}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "text.primary",
                textTransform: "uppercase",
                fontWeight: 600,
                display: "block",
                mt: 0.5,
              }}
            >
              {exp.dates}
            </Typography>
          </Box>
          <Typography
            variant="body1"
            sx={{ color: "text.secondary", lineHeight: 1.7, flex: 1, mb: 3 }}
          >
            {exp.description}
          </Typography>

          <Box sx={{ position: "relative", width: "100%", overflow: "hidden" }}>
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
                alignContent: "flex-start",
              }}
            >
              {renderChips()}
            </Box>
            <Box
              sx={{
                height: `${visibleHeight}px`,
                overflow: "hidden",
                width: "100%",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: `${gap}px`,
                  width: "100%",
                  alignContent: "flex-start",
                  transition: "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
                  transform: `translateY(-${page * (visibleHeight + gap)}px)`,
                }}
              >
                {renderChips()}
              </Box>
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                mt: 1,
                height: `${arrowBoxHeight}px`,
                alignItems: "center",
              }}
            >
              {maxPage > 0 && (
                <IconButton
                  onClick={handleVerticalScroll}
                  sx={{
                    border: "1px solid",
                    borderColor: "divider",
                    p: 0.5,
                  }}
                >
                  {page < maxPage ? (
                    <KeyboardArrowDownIcon fontSize="small" />
                  ) : (
                    <KeyboardArrowUpIcon fontSize="small" />
                  )}
                </IconButton>
              )}
            </Box>
          </Box>
        </Box>
      </TextAnimation>
    </Box>
  );
};

const ExperienceSection = ({ trigger }: ExperienceSectionProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const getTagColor = (tagName: string) => {
    const category = skills.find(
      (cat) =>
        cat.skills.some((s) => s.toLowerCase() === tagName.toLowerCase()) ||
        cat.label.toLowerCase() === tagName.toLowerCase()
    );
    return category ? category.color : "action.hover";
  };

  const checkScroll = () => {
    if (containerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction: "left" | "right") => {
    if (containerRef.current) {
      const container = containerRef.current;
      const card = container.firstElementChild as HTMLElement;
      if (!card) return;
      const cardGap = 24;
      const cardWidth = card.offsetWidth;
      const scrollDistance = cardWidth + cardGap;
      container.scrollBy({
        left: direction === "left" ? -scrollDistance : scrollDistance,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const ref = containerRef.current;
    if (ref) {
      ref.addEventListener("scroll", checkScroll);
      checkScroll();
      window.addEventListener("resize", checkScroll);
      return () => {
        ref.removeEventListener("scroll", checkScroll);
        window.removeEventListener("resize", checkScroll);
      };
    }
  }, []);

  return (
    <Section id="Experience">
      <TextAnimation duration={0.6} trigger={trigger}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            mb: 4,
          }}
        >
          <Typography variant="h2" sx={{ mb: 0 }}>
            Experience
          </Typography>
          <Stack direction="row" spacing={1}>
            <IconButton
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              sx={{ border: "1px solid", borderColor: "divider" }}
            >
              <ArrowBackIosNewIcon fontSize="small" />
            </IconButton>
            <IconButton
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              sx={{ border: "1px solid", borderColor: "divider" }}
            >
              <ArrowForwardIosIcon fontSize="small" />
            </IconButton>
          </Stack>
        </Box>
      </TextAnimation>
      <Box
        ref={containerRef}
        sx={{
          display: "flex",
          gap: 3,
          overflowX: "auto",
          scrollSnapType: "x mandatory",
          pt: 2,
          pb: 4,
          alignItems: "stretch",
          "::-webkit-scrollbar": { display: "none" },
          msOverflowStyle: "none",
          scrollbarWidth: "none",
        }}
      >
        {experiences.map((exp, index) => (
          <Box
            key={exp.id}
            sx={{
              scrollSnapAlign: "start",
              flexShrink: 0,
              display: "flex",
              width: "100%",
            }}
          >
            <ExperienceCard
              exp={exp}
              trigger={trigger}
              index={index}
              getTagColor={getTagColor}
            />
          </Box>
        ))}
      </Box>
    </Section>
  );
};

export default ExperienceSection;
