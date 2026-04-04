import { useState } from "react";
import Section from "../shared/Section";
import { Typography, Box, Chip } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import TextAnimation from "../../animations/AnimatedText";
import { useTheme } from '@mui/material/styles';
import { skills } from "../../data/skill";

interface SkillsSectionProps {
  trigger: number;
}

const SkillsSection = ({ trigger }: SkillsSectionProps) => {
  const theme = useTheme();
  const [activeFilters, setActiveFilters] = useState<string[]>(
    skills.map((c) => c.id)
  );

  const toggleFilter = (id: string) => {
    setActiveFilters((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <Section id="Skills">
      <TextAnimation duration={0.6} trigger={trigger}>
        <Typography variant="h2" gutterBottom>Skills</Typography>
      </TextAnimation>
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 6, width: "100%" }}>
        {skills.map((cat) => (
          <Chip
            key={cat.id}
            label={cat.label}
            onClick={() => toggleFilter(cat.id)}
            icon={activeFilters.includes(cat.id) ? <CheckIcon sx={{ color: "white !important" }} /> : undefined}
            sx={{ 
              ...theme.typography.h4,
              backgroundColor: activeFilters.includes(cat.id) ? cat.color : "default",
              "&:hover": {
                backgroundColor: activeFilters.includes(cat.id) ? cat.color : "default",
                opacity: 0.9
              },
              color: activeFilters.includes(cat.id) ? "white": theme.palette.text.primary,
              cursor: "pointer", fontSize: "1rem", py: 2, px: 1, ml: "0 !important" 
            }}
          />
        ))}
      </Box>
      <Box 
        sx={{ 
          display: "grid", 
          gridTemplateColumns: { 
            xs: "100%", 
            sm: "repeat(auto-fill, 400px)" 
          }, 
          gap: 4,
          alignItems: "stretch"
        }}
      >
        {skills.map((cat, catIndex) => {
          if (!activeFilters.includes(cat.id)) return null;
          return (
            <TextAnimation key={cat.id} trigger={trigger} delay={catIndex * 0.1}>
              <Box
                sx={{
                  height: "100%",
                  width: "100%",
                  borderRadius: "28px", 
                  backgroundColor: "background.paper",
                  display: "flex", 
                  flexDirection: "column", 
                  p: 4,
                  pb: "30px",
                  boxSizing: "border-box", 
                  transition: "0.3s",
                  "&:hover": { bgcolor:"action.hover", transform: "translateY(-8px)"},
                }}
              >
                <Typography variant="h3" fontWeight="bold" sx={{ mb: 1, color:"text.quarternary"}}>{cat.label}</Typography>
                <Typography variant="body2" sx={{ color: "text.grey", mb: 2.5, flex: 1 }}>
                  {cat.description}
                </Typography>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                  {cat.skills.map((s) => (
                    <Chip 
                      key={s} 
                      label={s} 
                      sx={{ 
                        ...theme.typography.h4,
                        py: 2, 
                        px: 1, 
                        bgcolor: cat.color,
                        color: "white", 
                        fontSize: "0.9rem",
                        height: "28px",
                        ml: "0 !important",
                        "&:hover": { bgcolor: cat.color }
                      }} 
                    />
                  ))}
                </Box>
              </Box>
            </TextAnimation>
          );
        })}
      </Box>
    </Section>
  );
};

export default SkillsSection;