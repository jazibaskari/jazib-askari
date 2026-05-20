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
      width: "100%",
      height: "auto",
      display: "flex",
      flexDirection: "column",
      boxSizing: "border-box",
      px: { xs: 2, sm: 6, md: "100px" },
      justifyContent: "flex-start",
      pb: { xs: 8, md: 12 },
      pt: { xs: 8, md: 12 },
      scrollMarginTop: "80px",
    }}
  >
    {children}
  </Box>
);
export default Section;
