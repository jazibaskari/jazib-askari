import Section from "../shared/Section";
import {Typography} from "@mui/material";

const AboutSection = () => (
  <Section id="About">
    <Typography variant="h2" gutterBottom>
    About 
    </Typography>
    <Typography variant="body1" sx={{color:"#bfc0c0"}}>    
    I am a product-centric Frontend Developer with over 4 years of experience leveraging TypeScript to build responsive, scalable React applications. Having engineered enterprise-scale applications for 300,000+ users at PwC, I specialise in translating UI/UX designs into high-performance code, while ensuring cross-browser compatibility and mobile-first responsiveness. I thrive in remote environments that value ownership, data-driven decisions, and maintaining high coding standards through collaborative code reviews. My strategic approach ensures every UI decision aligns with technical feasibility, user needs, and the business's bottom line.
    </Typography>
  </Section>
);

export default AboutSection;