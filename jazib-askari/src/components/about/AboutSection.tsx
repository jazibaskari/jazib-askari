import Section from "../shared/Section";
import { Typography } from "@mui/material";
import TextAnimation from "../../animations/AnimatedText";

interface AboutSectionProps {
  trigger: number;
}

const AboutSection = ({ trigger }: AboutSectionProps) => (
  <Section id="About">
    <TextAnimation duration={0.6} trigger={trigger}>
      <Typography variant="h2" gutterBottom>
        About 
      </Typography>
    </TextAnimation>
    <TextAnimation duration={1} trigger={trigger}>
      <Typography variant="body1" sx={{ color: "#bfc0c0" }}>    
        I am a product-centric Frontend Developer with over 4 years of experience leveraging TypeScript to build responsive, scalable React applications...
      </Typography>
    </TextAnimation>
  </Section>
);

export default AboutSection;