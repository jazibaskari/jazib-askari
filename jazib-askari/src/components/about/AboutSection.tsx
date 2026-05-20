import Section from "../shared/Section";
import { Typography, Box, Stack } from "@mui/material";
import TextAnimation from "../../animations/AnimatedText";

interface AboutSectionProps {
  trigger: number;
}

const AboutSection = ({ trigger }: AboutSectionProps) => {
  const statColor = "#bfc0c0";

  return (
    <Section id="About">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: { xs: 4, md: 6 },
          width: "100%",
        }}
      >
        <TextAnimation duration={1.5} trigger={trigger} delay={0.3}>
          <Stack
            direction="row"
            spacing={{ xs: 4, md: 8 }}
            sx={{
              justifyContent: "flex-start",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Stack direction="row" spacing={1} alignItems="center">
              <Typography variant="h3" sx={{ fontWeight: "bold" }}>
                10
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: "medium",
                  color: "text.tertiary",
                  lineHeight: 1,
                  mt: -1,
                }}
              >
                +
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: statColor,
                  fontWeight: 500,
                  lineHeight: 1.2,
                  ml: 1,
                }}
              >
                Years of <br /> experience
              </Typography>
            </Stack>
            <Stack direction="row" spacing={1} alignItems="center">
              <Typography variant="h3" sx={{ fontWeight: "bold" }}>
                30k
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: "medium",
                  color: "text.tertiary",
                  lineHeight: 1,
                  mt: -1,
                }}
              >
                +
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: statColor,
                  fontWeight: 500,
                  lineHeight: 1.2,
                  ml: 1,
                }}
              >
                Users <br /> reached
              </Typography>
            </Stack>
          </Stack>
        </TextAnimation>
        <Box sx={{ width: "100%" }}>
          <TextAnimation duration={0.1} trigger={trigger}>
            <Typography
              variant="body1"
              sx={{
                color: "#bfc0c0",
                lineHeight: 1.8,
                maxWidth: "800px",
              }}
            >
              I am a product-centric Frontend Engineer{" "}
              <Box
                component="span"
                sx={{ fontWeight: "bold", color: "text.primary" }}
              >
                based in Manchester
              </Box>
              , with over 4 years of experience leveraging TypeScript to build
              responsive, scalable React applications. Having engineered
              enterprise-scale applications for 300,000+ users at{"  "}
              <Box
                component="span"
                sx={{ fontWeight: "bold", color: "text.primary" }}
              >
                PwC
              </Box>
              , I thrive in environments that value ownership, data-driven
              decisions, and maintaining high coding standards to meet the
              business' bottom line.
            </Typography>
          </TextAnimation>
        </Box>
      </Box>
    </Section>
  );
};

export default AboutSection;
