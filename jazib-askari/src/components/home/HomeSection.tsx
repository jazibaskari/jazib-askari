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
  const iconColor = "#5ec2de";
  return (
    <Section id="Home">
      <TextAnimation duration={0.6} trigger={trigger}>
        <Typography variant="h2">Jazib Askari</Typography>
      </TextAnimation>
      <TextAnimation duration={0.6} trigger={trigger}>
        <Typography variant="h5" sx={{ mb: 0 }}>
          Frontend Engineer
        </Typography>
        <TextAnimation duration={0.6} trigger={trigger}>
          <Typography variant="body1" sx={{ mb: 0, color: "#bfc0c0", pt: 2 }}>
            I build responsive, accessible applications that prioritise
            user-centric product experiences.
          </Typography>
        </TextAnimation>
      </TextAnimation>
      <Stack direction="row" spacing={1} sx={{ ml: -1.5 }}>
        <TextAnimation duration={0.3} trigger={trigger}>
          <IconButton
            href="https://github.com/jazibaskari"
            target="_blank"
            sx={{ color: iconColor }}
          >
            <GitHubIcon />
          </IconButton>
        </TextAnimation>
        <TextAnimation duration={0.6} trigger={trigger}>
          <IconButton
            href="linkedin.com/in/jaz-a-5064209b"
            target="_blank"
            sx={{ color: iconColor }}
          >
            <LinkedInIcon />
          </IconButton>
        </TextAnimation>
        <TextAnimation duration={1.2} trigger={trigger}>
          <IconButton
            href="mailto:jazibaskari@hotmail.co.uk"
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
