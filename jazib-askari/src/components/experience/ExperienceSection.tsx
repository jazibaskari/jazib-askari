import { useState, useRef, useEffect } from "react";
import Section from "../shared/Section";
import { Typography, Box, Stack, Chip, IconButton } from "@mui/material";
import TextAnimation from "../../animations/AnimatedText";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useTheme } from '@mui/material/styles';
interface Experience {
  id: string;
  title: string;
  subtitle: string;
  dates: string;
  description: string;
  tags: string[]; 
}
interface ExperienceSectionProps {
  trigger: number;
}
const experiences: Experience[] = [
  {
    id: "pwc",
    title: "Frontend Developer",
    subtitle: "PwC",
    dates: "2022 — Present",
    description: "Engineered enterprise-scale applications for 300k+ users using TypeScript and React.",
    tags: ["React", "TypeScript", "Design Systems"]
  },
  {
    id: "agency",
    title: "Junior Web Developer",
    subtitle: "Creative Agency",
    dates: "2020 — 2022",
    description: "Developed responsive user interfaces for various clients.",
    tags: ["JavaScript", "Sass", "Figma"]
  },
  {
    id: "intern-1",
    title: "Software Intern",
    subtitle: "Tech Startup",
    dates: "2019 — 2020",
    description: "Assisted in the development of core product features.",
    tags: ["Node.js", "Git", "Agile"]
  },
  {
    id: "intern-2",
    title: "Software Intern",
    subtitle: "Tech Startup",
    dates: "2019 — 2020",
    description: "Assisted in the development of core product features.",
    tags: ["Node.js", "Git", "Agile"]
  },
  {
    id: "intern-3",
    title: "Software Intern",
    subtitle: "Tech Startup",
    dates: "2019 — 2020",
    description: "Assisted in the development of core product features.",
    tags: ["Node.js", "Git", "Agile"]
  },
  {
    id: "intern-4",
    title: "Software Intern",
    subtitle: "Tech Startup",
    dates: "2019 — 2020",
    description: "Assisted in the development of core product features.",
    tags: ["Node.js", "Git", "Agile"]
  }
];
const ExperienceSection = ({ trigger }: ExperienceSectionProps) => {
  const theme = useTheme();
  const containerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const checkScroll = () => {
    if (containerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 20);
    }
  };
  const scroll = (direction: "left" | "right") => {
    if (containerRef.current) {
      const scrollAmount = containerRef.current.clientWidth * 0.8;
      containerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
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
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", mb: 4 }}>
          <Typography variant="h2" sx={{ mb: 0 }}>
            Experience
          </Typography>
          <Stack direction="row" spacing={1} sx={{ display: { xs: "none", sm: "flex" } }}>
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
          scrollSnapType: "x proximity", 
          pb: 4,
          px: { xs: 0, md: 0 },
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
              width: { xs: "85%", sm: "45%", md: "31%" } 
            }}
          >
            <TextAnimation trigger={trigger} delay={index * 0.1}>
              <Box
                sx={{
                  width: "100%",
                  minHeight: "340px",
                  borderRadius: "28px",
                  backgroundColor: "background.paper",
                  display: "flex",
                  flexDirection: "column",
                  p: 4,
                  boxSizing: "border-box",
                  transition: "0.3s ease-in-out",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    backgroundColor: "action.hover",
                  },
                }}
              >
                <Box sx={{ mb: 2 }}>
                  <Typography variant="h3" fontWeight="bold" sx={{color: "text.grey"}}>{exp.title}</Typography>
                  <Typography variant="subtitle1" sx={{ color: "text.tertiary", fontWeight: 600, mt: 0.5 }}>
                    {exp.subtitle}
                  </Typography>
                  <Typography variant="caption" sx={{ color: "text.primary", fontWeight: 600, textTransform: "uppercase", display: "block", mt: 0.5 }}>
                    {exp.dates}
                  </Typography>
                </Box>
                <Typography variant="body1" sx={{ color: "text.secondary", lineHeight: 1.7, fontSize: "1rem", mb: 3, flex: 1 }}>
                  {exp.description}
                </Typography>
                <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ gap: 1 }}>
                  {exp.tags.map((tag) => (
                    <Chip key={tag} label={tag} sx={{ ...theme.typography.h4, bgcolor: "action.hover",     py: 2, 
                      px: 1, fontSize: "0.9rem", height: "28px" }} />
                  ))}
                </Stack>
              </Box>
            </TextAnimation>
          </Box>
        ))}
        <Box sx={{ minWidth: { xs: "40px", md: "150px" }, flexShrink: 0 }} />
      </Box>
    </Section>
  );
};
export default ExperienceSection;