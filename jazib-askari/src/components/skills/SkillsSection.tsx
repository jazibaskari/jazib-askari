import Section from "../shared/Section";
import { Typography, Box, Stack, Chip } from "@mui/material";
import TextAnimation from "../../animations/AnimatedText";
interface SkillsSectionProps {
  trigger: number;
}
const skills = [
  "TypeScript", 
  "React", 
  "Next.js", 
  "Material UI", 
  "Framer Motion", 
  "Node.js", 
  "PostgreSQL",
  "TypeScript", 
  "React", 
  "Next.js", 
  "Material UI", 
  "Framer Motion", 
  "Node.js", 
];
const SkillsSection = ({ trigger }: SkillsSectionProps) => (
  <Section id="Skills">
    <TextAnimation duration={0.6} trigger={trigger}>
      <Typography variant="h2" gutterBottom>
        Skills
      </Typography>
    </TextAnimation>
    <Box sx={{
      backgroundColor: "#f7f7f7",
      borderRadius: 2,
      p: 2,
      mb: 4,
    }}>
      <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
        {skills.map((skill, index) => (
          <TextAnimation 
            key={skill} 
            trigger={trigger}
            duration={0.4} 
            delay={index * 0.1} 
          >
            <Chip 
              label={skill} 
              variant="filled" 
              sx={{ fontWeight: 500 }} 
            />
          </TextAnimation>
        ))}
      </Stack>
    </Box>
  </Section>
);
export default SkillsSection;