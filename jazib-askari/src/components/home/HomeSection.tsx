import Section from "../shared/Section";
import { Typography } from "@mui/material";
import TextAnimation from "../../animations/AnimatedText";

interface HomeSectionProps {
  trigger: number;
}

const HomeSection = ({ trigger }: HomeSectionProps) => (
  <Section id="Home">
    <TextAnimation duration={0.6} trigger={trigger}>
      <Typography variant="h2">
        Jazib Askari
      </Typography>
    </TextAnimation>
    <TextAnimation duration={1} trigger={trigger}>
      <Typography sx={{ color: "#bfc0c0" }} variant="h2" >
        Portfolio 2026
      </Typography>
    </TextAnimation>
  </Section>
);

export default HomeSection;