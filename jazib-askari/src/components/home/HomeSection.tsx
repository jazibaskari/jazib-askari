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
  const iconColor = "#55b7b5"; 
  return (
    <Section id="Home" isHome={true}>
      <TextAnimation duration={0.6} trigger={trigger}>
        <Typography variant="h2" sx={{ mb: 0 }}>
          Jazib Askari 
        </Typography>
      </TextAnimation>
        <Stack direction="row" spacing={1} sx={{ ml: -1.5 }}> 
        <TextAnimation duration={0.3} trigger={trigger}>
          <IconButton 
            href="https://github.com/yourusername" 
            target="_blank"
            sx={{ color: iconColor }}
          >
            <GitHubIcon /> 
          </IconButton>
          </TextAnimation>
          <TextAnimation duration={0.6} trigger={trigger}>
          <IconButton 
            href="https://linkedin.com/in/yourusername" 
            target="_blank"
            sx={{ color: iconColor }}
          >
            <LinkedInIcon />
          </IconButton>
          </TextAnimation>
          <TextAnimation duration={1.2} trigger={trigger}>
          <IconButton 
            href="mailto:your.email@example.com" 
            sx={{ color: iconColor }}
          >
            <MailOutlineIcon />
          </IconButton>
          </TextAnimation>
        </Stack>
    </Section>
  );
};
export default HomeSection;