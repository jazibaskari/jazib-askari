import { useState, useEffect, useRef } from "react";
import { Box } from "@mui/system";
import {
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { alpha } from "@mui/material/styles";
import { useLocation } from "react-router-dom";

const allSections = ["about", "experience", "projects"];

interface NavbarProps {
  onNavClick?: () => void;
}

const Navbar = ({ onNavClick }: NavbarProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isAtTop, setIsAtTop] = useState(true);

  const location = useLocation();
  const isManualScroll = useRef(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (isManualScroll.current) return;
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-90px 0px -50% 0px" }
    );
    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));
    return () => {
      observer.disconnect();
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  useEffect(() => {
    const handleScrollVisibility = () => setIsAtTop(window.scrollY < 50);
    window.addEventListener("scroll", handleScrollVisibility);
    return () => window.removeEventListener("scroll", handleScrollVisibility);
  }, []);

  const isProjectPage = location.pathname.startsWith("/projects/");
  if (isProjectPage) return null;

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      isManualScroll.current = true;
      setActiveSection(id);
      const elementPosition =
        el.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: elementPosition - 80, behavior: "smooth" });
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        isManualScroll.current = false;
      }, 800);
    }
    setMobileOpen(false);
    if (onNavClick) onNavClick();
  };

  return (
    <Box
      sx={{
        display: { xs: "flex", md: "none" },
        height: "80px",
        position: "sticky",
        top: 0,
        zIndex: 1000,
        justifyContent: "space-between",
        alignItems: "center",
        bgcolor: (theme) => alpha(theme.palette.background.default, 0.7),
        backdropFilter: "blur(12px)",
        px: 2,
        transition: "all 0.3s ease",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Typography
          variant="h5"
          fontWeight="medium"
          sx={{ color: "text.primary" }}
        >
          {isAtTop ? "" : activeSection}
        </Typography>
      </Box>

      <Box sx={{ display: "flex" }}>
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
          "& .MuiDrawer-paper": {
            width: 180,
            bgcolor: (theme) => alpha(theme.palette.background.default, 0.8),
            backdropFilter: "blur(12px)",
          },
        }}
      >
        <Box sx={{ pt: 4 }}>
          <List disablePadding>
            {allSections.map((s) => (
              <ListItem key={s} disablePadding>
                <Button
                  onClick={() => handleScroll(s)}
                  disableRipple
                  sx={{
                    color:
                      activeSection === s && !isAtTop
                        ? "text.primary"
                        : "text.secondary",
                    width: "100%",
                    justifyContent: "flex-end",
                    px: 3,
                    py: 2,
                    textTransform: "none",
                  }}
                >
                  <Typography variant="h5" fontWeight="medium">
                    {s}
                  </Typography>
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
