import { useState } from "react";
import { Box } from "@mui/system";
import { Button, IconButton, Drawer, List, ListItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const allSections = ["about", "experience", "projects"];

interface NavbarProps {
  onNavClick?: () => void;
}

const Navbar = ({ onNavClick }: NavbarProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const elementPosition =
        el.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: elementPosition - 80, behavior: "smooth" });
    }
    setMobileOpen(false);
    if (onNavClick) onNavClick();
  };

  return (
    <Box
      sx={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        bgcolor: "background.default",
      }}
    >
      <Box sx={{ display: { xs: "flex", md: "none" } }}>
        <IconButton color="inherit" onClick={handleDrawerToggle}>
          <MenuIcon />
        </IconButton>
      </Box>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": { width: 180, bgcolor: "background.default" },
        }}
      >
        <Box sx={{ pt: 4 }}>
          <List disablePadding>
            {allSections.map((s) => (
              <ListItem key={s} disablePadding>
                <Button
                  onClick={() => handleScroll(s)}
                  sx={{
                    width: "100%",
                    justifyContent: "flex-end",
                    px: 3,
                    py: 2,
                  }}
                >
                  {s}
                </Button>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
};

export default Navbar;
