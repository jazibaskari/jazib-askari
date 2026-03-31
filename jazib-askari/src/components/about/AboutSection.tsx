import Section from "../shared/Section";
import {Typography} from "@mui/material";

const AboutSection = () => (
  <Section id="About">
    <Typography variant="h2" gutterBottom>
    About Me
    </Typography>
    <Typography variant="body1">    
    I am a front-end developer transitioning to data analytics.
    </Typography>
  </Section>
);

export default AboutSection;