import { Box, Typography } from "@mui/material";
import Section from "../shared/Section";

const DisclaimerSection = () => {
  return (
    <Section id="Disclaimer">
      <Box
        component="footer"
        sx={{
          pb: 2,
        }}
      >
        <Typography
          variant="body1"
          sx={{
            color: "text.secondary",
          }}
        >
          © {new Date().getFullYear()} Jazib Askari. Built with React,
          TypeScript, and Material-UI.
        </Typography>
      </Box>
    </Section>
  );
};
export default DisclaimerSection;
