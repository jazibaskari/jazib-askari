import React from "react";
import { Box } from "@mui/system";
import { Button } from "@mui/material";

const sections = ["home", "about", "projects"];

const Navbar: React.FC = () => {
  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Box
      sx={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        display: "flex",
        gap: 2,
        p: 2,
        bgcolor: "background.paper",
        boxShadow: 1,
      }}
    >
      {sections.map((s) => (
        <Button key={s} onClick={() => handleScroll(s)}>
          {s.toUpperCase()}
        </Button>
      ))}
    </Box>
  );
};

export default Navbar;