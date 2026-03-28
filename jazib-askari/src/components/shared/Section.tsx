import { Box } from "@mui/system";
import React from "react";
import type { ReactNode } from "react";
interface SectionProps {
  id: string;
  children: ReactNode;
}
const Section: React.FC<SectionProps> = ({ id, children }) => (
  <Box
    id={id}
    sx={{
      minHeight: "100vh",
      px: 4,
      py: 8,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    }}
  >
    {children}
  </Box>
);
export default Section;