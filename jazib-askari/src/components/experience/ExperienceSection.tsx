import Section from "../shared/Section";
import { Typography, Box, Stack, Chip, Button } from "@mui/material";
import TextAnimation from "../../animations/AnimatedText";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useNavigate } from "react-router-dom";

interface Experience {
  id: string;
  title: string;
  subtitle: string;
  dates: string;
  description: string;
  tags: string[]; // Added array for the chips
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
    description: "Engineered enterprise-scale applications for 300k+ users using TypeScript and React. Focused on performance optimization and maintaining high coding standards.",
    tags: ["React", "TypeScript", "Design Systems"]
  },
  {
    id: "agency",
    title: "Junior Web Developer",
    subtitle: "Creative Agency",
    dates: "2020 — 2022",
    description: "Developed responsive user interfaces for various clients. Collaborated closely with designers to translate high-fidelity Figma mockups into functional code.",
    tags: ["JavaScript", "Sass", "Figma"]
  },
  {
    id: "intern",
    title: "Software Intern",
    subtitle: "Tech Startup",
    dates: "2019 — 2020",
    description: "Assisted in the development of core product features and participated in daily stand-ups and code reviews to ensure feature quality.",
    tags: ["Node.js", "Git", "Agile"]
  }
];

const ExperienceSection = ({ trigger }: ExperienceSectionProps) => {
  const navigate = useNavigate();
  return (
    <Section id="Experience">
      <TextAnimation duration={0.6} trigger={trigger}>
        <Typography variant="h2" gutterBottom>
          Experience
        </Typography>
      </TextAnimation>

      <Box 
        sx={{ 
          display: "flex", 
          flexWrap: "wrap", 
          gap: 4, 
          justifyContent: { xs: "center", md: "flex-start" },
          mt: 4 
        }}
      >
        {experiences.map((exp, index) => (
          <TextAnimation key={exp.id} trigger={trigger} delay={index * 0.1}>
            <Box
              sx={{
                width: { xs: "100%", sm: "400px" },
                minHeight: "340px", // Increased slightly to accommodate chips
                borderRadius: "28px",
                backgroundColor: "#f7f7f7",
                display: "flex",
                flexDirection: "column",
                p: 4,
                boxSizing: "border-box",
                transition: "0.3s ease-in-out",
                "&:hover": { 
                  transform: "translateY(-8px)",
                  backgroundColor: "#efefef" 
                },
              }}
            >
              {/* Vertical Header Info */}
              <Box sx={{ mb: 2 }}>
                <Typography variant="h5" fontWeight="bold">
                  {exp.title}
                </Typography>

                <Typography 
                  variant="subtitle1" 
                  sx={{ color: "primary.main", fontWeight: 600, mt: 0.5 }}
                >
                  {exp.subtitle}
                </Typography>

                <Typography 
                  variant="caption" 
                  sx={{ 
                    color: "text.secondary", 
                    fontWeight: 600, 
                    textTransform: "uppercase",
                    display: "block",
                    mt: 0.5
                  }}
                >
                  {exp.dates}
                </Typography>
              </Box>

              {/* Description - flex: 1 pushes the chips to the bottom */}
              <Typography 
                variant="body1" 
                sx={{ 
                  color: "text.secondary", 
                  lineHeight: 1.7,
                  fontSize: "1rem",
                  mb: 3,
                  flex: 1 
                }}
              >
                {exp.description}
              </Typography>

              {/* Tags/Chips Section */}
              <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ gap: 1 }}>
                {exp.tags.map((tag) => (
                  <Chip 
                    key={tag} 
                    label={tag} 
                    sx={{ 
                      bgcolor: "white", 
                      fontWeight: 600, 
                      fontSize: "0.8rem",
                      height: "28px" 
                    }} 
                  />
                ))}
              </Stack>
            </Box>
          </TextAnimation>
        ))}
                   <Button
  variant="text"
  endIcon={<ArrowForwardIcon />}
  onClick={() => navigate("/projects")}
  sx={(theme) => ({
    ...theme.typography.body1, 
    textTransform: "none",
    p: 0, 
    minWidth: 0,
    color: "text.primary",
    
    
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    
    "& .MuiButton-endIcon": {
      transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    },

    "&:hover": {
      backgroundColor: "transparent",
      color: "primary.main",
      "& .MuiButton-endIcon": {
        transform: "translateX(6px)", 
      },
    },
  })}
>
  View All Experience
</Button>
      </Box>
    </Section>
  );
};

export default ExperienceSection;