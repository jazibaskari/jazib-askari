import { Box } from "@mui/system";
import type { ReactNode } from "react";

interface SectionProps {
  id: string;
  children: ReactNode;
}

const Section = ({ id, children }: SectionProps) => (
  <Box
    component="section" 
    id={id}
    sx={{
      minHeight: "100vh",
      px: { xs: 2, sm: 6, md: "100px" }, 
      py: 8,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      scrollMarginTop: "80px",
      width: "100%",
      boxSizing: "border-box",
    }}
  >
    {children}
  </Box>
);

export default Section;