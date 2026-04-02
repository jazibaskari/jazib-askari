import { useState, useContext } from "react";
import { Box } from "@mui/system";
import { 
  Button, 
  IconButton, 
  Drawer, 
  List, 
  ListItem, 
  ListItemButton, 
  ListItemText,
  useTheme 
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import Brightness4Icon from '@mui/icons-material/Brightness4'; 
import Brightness7Icon from '@mui/icons-material/Brightness7'; 
import { ColourModeContext } from "../../context/ColourModeContext"; 
const allSections = ["Home", "About", "Skills", "Experience", "Projects"];
interface NavbarProps {
  onNavClick?: () => void;
}
const Navbar = ({ onNavClick }: NavbarProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const colourMode = useContext(ColourModeContext);
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
    "&:hover": { bgcolor: "action.hover" }
  };
  return (
    <Box
      sx={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        display: "flex",
        justifyContent: "space-between", 
        alignItems: "center",
        p: 2,
        bgcolor: "background.default", 
      }}
    >
      <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
        {allSections.map((s) => (
          <Button key={s} sx={buttonStyle} onClick={() => handleScroll(s)}>
            {s}
          </Button>
        ))}
      </Box>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <IconButton onClick={colourMode.toggleColourMode} color="inherit">
          {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
        <Box sx={{ display: { xs: "flex", md: "none" }, ml: 1 }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
        </Box>
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