import { Box } from "@mui/system";
import type { ReactNode } from "react";

interface SectionProps {
  id: string;
  children: ReactNode;
  isHome?: boolean;
}

const Section = ({ id, children, isHome }: SectionProps) => (
  <Box
    component="section" 
    id={id}
    sx={{
      width: "100%",
      height: isHome ? "100vh" : "auto", 
      display: "flex",
      flexDirection: "column",
      boxSizing: "border-box",

      px: isHome ? { xs: 4, md: "100px" } : { xs: 2, sm: 6, md: "100px" }, 

      justifyContent: isHome ? "flex-end" : "flex-start",
      pb: isHome ? "250px" : { xs: 8, md: 12 }, 
      pt: isHome ? 0 : { xs: 8, md: 12 },

      scrollMarginTop: isHome ? "0px" : "80px", 
    }}
  >
    {children}
  </Box>
);

export default Section;