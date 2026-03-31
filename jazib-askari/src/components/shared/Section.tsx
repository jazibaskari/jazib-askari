import { Box } from "@mui/system";
import type { ReactNode } from "react";
interface SectionProps {
  id: string;
  children: ReactNode;
}
const Section = ({ id, children }: SectionProps) => (
  <Box
    id={id}
    sx={{
      minHeight: "100vh",
      px: 4,
      py: 8,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
        scrollMarginTop: "80px", 
    }}
  >
    {children}
  </Box>
);
export default Section;