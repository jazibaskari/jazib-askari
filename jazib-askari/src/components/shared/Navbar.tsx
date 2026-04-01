import { Box } from "@mui/system";
import { Button } from "@mui/material";

const sections = ["Home", "About", "Projects"];

interface NavbarProps {
  onNavClick: () => void;
}

const Navbar = ({ onNavClick }: NavbarProps) => {
  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      onNavClick(); 
    }
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
      }}
    >
      {sections.map((s) => (
        <Button
          sx={{ color: "text.primary" }}
          key={s}
          onClick={() => handleScroll(s)}
        >
          {s}
        </Button>
      ))}
    </Box>
  );
};

export default Navbar;