import { useState, useEffect } from "react";
import Section from "../shared/Section";
import { Typography, Box, Stack } from "@mui/material";
import TextAnimation from "../../animations/AnimatedText";
import { motion, AnimatePresence } from "framer-motion";
interface AboutSectionProps {
  trigger: number;
}
const words = ["developing", "designing", "creating"];
const AboutSection = ({ trigger }: AboutSectionProps) => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  const statColor = "#bfc0c0";
  return (
    <Section id="About">
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          gap: { xs: 6, md: 10 },
          width: "100%",
        }}
      >
        <Box sx={{ flex: 1.2 }}>
          <TextAnimation duration={0.1} trigger={trigger}>
            <Typography 
              variant="h2" 
              component="h2" 
              sx={{ 
                fontWeight: 'bold', 
                display: 'flex', 
                alignItems: 'baseline', 
                flexWrap: 'wrap',
                mb: 2
              }}
            >
              Find me&nbsp;
              <Box 
                component="span" 
                sx={{ 
                  position: "relative", 
                  display: "inline-grid", 
                  color: "text.tertiary",
                }}
              >
                <Typography
                  variant="h2" 
                  component="span" 
                  sx={{ 
                    fontWeight: 'bold', 
                    visibility: 'hidden', 
                    height: 0, 
                    display: 'block' 
                  }}
                >
                  {words[index]}
                </Typography>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={words[index]}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    style={{ 
                      gridArea: "1 / 1", 
                      display: "block" 
                    }}
                  >
                    {words[index]}
                  </motion.span>
                </AnimatePresence>
              </Box>
            </Typography>
          </TextAnimation>
          <TextAnimation duration={1} trigger={trigger}>
            <Typography 
              variant="body1" 
              sx={{ 
                color: "#bfc0c0", 
                lineHeight: 1.8,
                maxWidth: "800px" 
              }}
            >
              I am a product-centric Frontend Developer with over 4 years of experience leveraging TypeScript to build responsive, scalable React applications. Having engineered enterprise-scale applications for 300,000+ users at PwC, I thrive in environments that value ownership, data-driven decisions, and maintaining high coding standards to meet the business' bottom line.
            </Typography>
          </TextAnimation>
        </Box>
        <TextAnimation duration={1.5} trigger={trigger} delay={0.3}>
          <Stack 
            direction="row" 
            spacing={{ xs: 4, md: 8 }} 
            sx={{ 
              flex: 1, 
              justifyContent: "center", 
              alignItems: "center", 
              width: "100%",
              minWidth: { md: "450px" }
            }}
          >
            <Stack direction="row" spacing={1} alignItems="center">
              <Typography variant="h1" sx={{ fontWeight: 'bold' }}>10</Typography>
              <Typography 
                variant="h2" 
                sx={{ 
                  fontWeight: 'bold', 
                  color: "text.tertiary", 
                  lineHeight: 1,
                  mt: -1 
                }}
              >
                +
              </Typography>
              <Typography variant="body1" sx={{ color: statColor, fontWeight: 500, lineHeight: 1.2, ml: 1 }}>
                Years of <br /> experience
              </Typography>
            </Stack>
            <Stack direction="row" spacing={1} alignItems="center">
              <Typography variant="h1" sx={{ fontWeight: 'bold' }}>30k</Typography>
              <Typography 
                variant="h2" 
                sx={{ 
                  fontWeight: 'bold', 
                  color: "text.tertiary", 
                  lineHeight: 1,
                  mt: -1
                }}
              >
                +
              </Typography>
              <Typography variant="body1" sx={{ color: statColor, fontWeight: 500, lineHeight: 1.2, ml: 1 }}>
                Users <br /> reached
              </Typography>
            </Stack>
          </Stack>
        </TextAnimation>
      </Box>
    </Section>
  );
};
export default AboutSection;