import { useState, useRef, useEffect } from "react";
import Section from "../shared/Section";
import { Typography, Box, Stack, Chip, IconButton, useMediaQuery, useTheme } from "@mui/material";
import TextAnimation from "../../animations/AnimatedText";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { experiences } from "../../data/expereince";

interface ExperienceSectionProps {
  trigger: number;
}


const ExperienceSection = ({ trigger }: ExperienceSectionProps) => {
  const theme = useTheme();
  const containerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

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

      const gap = 24; 
      const cardWidth = card.offsetWidth;
      
      let scrollMultiplier = 3; 
      if (isMobile) scrollMultiplier = 1;
      else if (isTablet) scrollMultiplier = 2;

      const scrollDistance = (cardWidth + gap) * scrollMultiplier;

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
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", mb: 4 }}>
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
              width: { 
                xs: "100%", 
                sm: "calc((100% - 24px) / 2)", 
                md: "calc((100% - 48px) / 3)" 
              },
            }}
          >
            <Box sx={{ width: "100%" }}>
              <TextAnimation trigger={trigger} delay={index * 0.1}>
                <Box
                  sx={{
                    width: "100%",
                    height: "400px", 
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
                    <Typography variant="h3" fontWeight="bold" sx={{color: "text.primary"}}>{exp.title}</Typography>
                    <Typography variant="body1" sx={{ color: "text.tertiary", mt: 0.5 }}>
                      {exp.subtitle}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "text.primary", textTransform:"uppercase", fontWeight: 600, display: "block", mt: 0.5 }}>
                      {exp.dates}
                    </Typography>
                  </Box>

                  <Typography variant="body1" sx={{ color: "text.secondary", lineHeight: 1.7, fontSize: "1rem", mb: 3, flex: 1 }}>
                    {exp.description}
                  </Typography>
                  
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                    {exp.tags.map((tag) => (
                      <Chip 
                        key={tag} 
                        label={tag} 
                        sx={{ 
                          ...theme.typography.h4, 
                          bgcolor: "action.hover",     
                          py: 2, 
                          px: 1, 
                          fontSize: "0.9rem", 
                          height: "28px", 
                          ml: "0 !important" 
                        }} 
                      />
                    ))}
                  </Box>
                </Box>
              </TextAnimation>
            </Box>
          </Box>
        ))}
      </Box>
    </Section>
  );
};

export default ExperienceSection;