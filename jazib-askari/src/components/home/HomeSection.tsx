import Section from "../shared/Section";
import { Typography, Stack, IconButton } from "@mui/material";
import TextAnimation from "../../animations/AnimatedText";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
interface HomeSectionProps {
  trigger: number;
}
const HomeSection = ({ trigger }: HomeSectionProps) => {
  const iconColor = "#4CAF50"; 
  return (
    <Section id="Home" isHome={true}>
      <TextAnimation duration={0.6} trigger={trigger}>
        <Typography variant="h2" sx={{ mb: 0 }}>
          Jazib Askari 
        </Typography>
      </TextAnimation>
      <TextAnimation duration={1.2} trigger={trigger}>
        <Stack direction="row" spacing={1} sx={{ ml: -1.5 }}> 
          <IconButton 
            href="https://github.com/yourusername" 
            target="_blank"
            sx={{ color: iconColor }}
          >
            <GitHubIcon /> 
          </IconButton>
          <IconButton 
            href="https://linkedin.com/in/yourusername" 
            target="_blank"
            sx={{ color: iconColor }}
          >
            <LinkedInIcon />
          </IconButton>
          <IconButton 
            href="mailto:your.email@example.com" 
            sx={{ color: iconColor }}
          >
            <MailOutlineIcon />
          </IconButton>
        </Stack>
      </TextAnimation>
    </Section>
  );
};
export default HomeSection;