import { useState } from "react";
import { Box } from "@mui/system";
import { 
  Button, 
  IconButton, 
  Drawer, 
  List, 
  ListItem, 
  ListItemButton, 
  ListItemText 
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

const allSections = ["Home", "About", "Skills", "Experience", "Projects"];

interface NavbarProps {
  onNavClick?: () => void;
}

const Navbar = ({ onNavClick }: NavbarProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleScroll = (id: string) => {
    if (id === "Home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const el = document.getElementById(id);
      if (el) {
        const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
        
        const offset = 80; 
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }
    setMobileOpen(false);
    if (onNavClick) onNavClick();
  };
  const buttonStyle = {
    color: "text.primary",
    textTransform: "none",
    fontWeight: 500,
    fontSize: "0.95rem",
    "&:hover": { bgcolor: "rgba(0,0,0,0.04)" }
  };

  return (
    <Box
      sx={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        display: "flex",
        justifyContent: "flex-start", 
        alignItems: "center",
        p: 2,
        bgcolor: "background.paper",
      }}
    >
      <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
        {allSections.map((s) => (
          <Button key={s} sx={buttonStyle} onClick={() => handleScroll(s)}>
            {s}
          </Button>
        ))}
      </Box>
      <Box sx={{ 
        display: { xs: "flex", md: "none" }, 
        width: "100%", 
        justifyContent: "flex-end" 
      }}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerToggle}
        >
          <MenuIcon />
        </IconButton>
      </Box>
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: 240 },
        }}
      >
        <Box sx={{ pt: 2 }}>
          <List>
            {allSections.map((s) => (
              <ListItem key={s} disablePadding>
                <ListItemButton onClick={() => handleScroll(s)}>
                  <ListItemText primary={s} sx={{ textAlign: 'center' }} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
};

export default Navbar;