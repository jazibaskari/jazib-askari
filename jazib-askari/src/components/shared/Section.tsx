import { Box } from "@mui/system";
import type { ReactNode } from "react";

interface SectionProps {
  id: string;
  children: ReactNode;
  noPaddingTop?: boolean;
}

const Section = ({ id, children, noPaddingTop }: SectionProps) => (
  <Box
    component="section"
    id={id}
    sx={{
      width: "100%",
      height: "auto",
      display: "flex",
      flexDirection: "column",
      boxSizing: "border-box",
      px: 0,
      justifyContent: "flex-start",
      pt: noPaddingTop ? 0 : { xs: 4, md: 6 },
    }}
  >
    {children}
  </Box>
);

export default Section;
