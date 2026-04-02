import { useState } from "react";
import Section from "../shared/Section";
import { Typography, Box, Chip } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import CodeIcon from "@mui/icons-material/Code";
import StorageIcon from "@mui/icons-material/Storage";
import BrushIcon from "@mui/icons-material/Brush";
import RuleIcon from "@mui/icons-material/Rule";
import BuildIcon from "@mui/icons-material/Build";
import TextAnimation from "../../animations/AnimatedText";
import { useTheme } from '@mui/material/styles';

interface SkillsSectionProps {
  trigger: number;
}

const skillCategories = [
  { id: "frontend", label: "Frontend", icon: <CodeIcon />, description: "Modern, reactive user interfaces built with the latest frameworks.", skills: ["React", "Next.js", "TypeScript"] },
  { id: "data", label: "Data", icon: <StorageIcon />, description: "Efficient state management and data flow architecture.", skills: ["Redux", "Zustand"] },
  { id: "uiux", label: "UI/UX", icon: <BrushIcon />, description: "Clean design systems and smooth motion experiences.", skills: ["MUI", "Framer"] },
  { id: "testing", label: "Testing", icon: <RuleIcon />, description: "Ensuring high-quality code through robust QA testing.", skills: ["Jest", "Cypress"] },
  { id: "tooling", label: "Tooling", icon: <BuildIcon />, description: "Streamlined development workflows and deployment.", skills: ["Git", "Docker"] },
];

const SkillsSection = ({ trigger }: SkillsSectionProps) => {
  const theme = useTheme();
  const [activeFilters, setActiveFilters] = useState<string[]>(
    skillCategories.map((c) => c.id)
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
      <Box 
        sx={{ 
          display: "flex", 
          flexWrap: "wrap", 
          gap: 1, 
          mb: 6, 
          justifyContent: "flex-start",
          width: "100%"
        }}
      >
        {skillCategories.map((cat) => (
          <Chip
            key={cat.id}
            label={cat.label}
            onClick={() => toggleFilter(cat.id)}
            icon={activeFilters.includes(cat.id) ? <CheckIcon /> : undefined}
            color={activeFilters.includes(cat.id) ? "primary" : "default"}
            variant={activeFilters.includes(cat.id) ? "filled" : "filled"}
            sx={{ 
              ...theme.typography.h4,
              color: activeFilters.includes(cat.id) ? "white": theme.palette.text.primary,
              cursor: "pointer", 
              fontSize: "1rem", 
              py: 2, 
              px: 1,
              ml: "0 !important" 
            }}
          />
        ))}
      </Box>
      <Box 
        sx={{ 
          display: "flex", 
          flexWrap: "wrap", 
          gap: 4, 
          justifyContent: "flex-start" 
        }}
      >
        {skillCategories.map((cat, catIndex) => {
          if (!activeFilters.includes(cat.id)) return null;

          return (
            <TextAnimation key={cat.id} trigger={trigger} delay={catIndex * 0.1}>
              <Box
                sx={{
                  width: { xs: "100%", sm: "400px" }, 
                  maxWidth: "400px",
                  height: "300px", 
                  borderRadius: "28px", 
                  backgroundColor: "background.paper",
                  display: "flex", 
                  flexDirection: "column", 
                  alignItems: "flex-start", 
                  p: 4,
                  boxSizing: "border-box", 
                  overflowY: "auto",
                  '&::-webkit-scrollbar': { display: 'none' },
                  transition: "0.3s",
                  "&:hover": { bgcolor:"action.hover", transform: "translateY(-8px)"},
                }}
              >
                <Typography variant="h3" fontWeight="bold" sx={{ mb: 1}}>
                  {cat.label}
                </Typography>
                <Typography variant="body2" sx={{ color: "text.grey", mb: 2.5 }}>
                  {cat.description}
                </Typography>
                <Box 
                  sx={{ 
                    display: "flex", 
                    flexWrap: "wrap", 
                    gap: 1.5,
                    justifyContent: "flex-start",
                    width: "100%"
                  }}
                >
                  {cat.skills.map((s) => (
                    <Chip 
                      key={s} 
                      label={s} 
                      sx={{ 
                        ...theme.typography.h4,
                        bgcolor: "action.hover", 
                        fontSize: "0.9rem",
                        ml: "0 !important",
                        py: 2, 
                        px: 1,
                        height: "28px"
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