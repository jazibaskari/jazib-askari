import { useState, useEffect, useContext } from "react";
import { Box, Typography, Stack, IconButton, useTheme } from "@mui/material";
import TextAnimation from "../../animations/AnimatedText";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { ColourModeContext } from "../../context/ColourModeContext";

interface HomeSectionProps {
  trigger: number;
}

const navItems = ["About", "Experience", "Projects"];

const HomeSection = ({ trigger }: HomeSectionProps) => {
  const [activeSection, setActiveSection] = useState("");
  const theme = useTheme();
  const colourMode = useContext(ColourModeContext);
  const iconColor = "text.secondary";

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveSection(entry.target.id);
      });
    });
    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.getBoundingClientRect().top + window.pageYOffset - 100,
        behavior: "smooth",
      });
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
        overflow: "hidden",
      }}
    >
      <Box>
        <TextAnimation duration={0.6} trigger={trigger}>
          <Typography variant="h2" fontWeight="medium">
            Jazib Askari
          </Typography>
        </TextAnimation>
        <TextAnimation duration={0.6} trigger={trigger}>
          <Typography variant="h5" sx={{ mb: 0 }}>
            Frontend Engineer
          </Typography>
          <TextAnimation duration={0.6} trigger={trigger}>
            <Typography variant="body1" sx={{ mb: 0, color: "#bfc0c0", pt: 2 }}>
              I build responsive, accessible applications for product-centric
              user experiences.
            </Typography>
          </TextAnimation>
        </TextAnimation>

        {/* Navigation */}
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            flexDirection: "column",
            gap: 2,
            mt: 8,
          }}
        >
          {navItems.map((item) => (
            <Box
              key={item}
              onClick={() => handleScroll(item)}
              sx={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
                width: "max-content",
                py: 1,
              }}
            >
              <Box
                className="nav-line"
                sx={{
                  height: "1px",
                  width: activeSection === item ? "64px" : "32px",
                  backgroundColor:
                    activeSection === item ? "text.primary" : "text.secondary",
                  transition: "all 0.3s ease",
                  mr: 2,
                }}
              />
              <Typography
                variant="h5"
                sx={{
                  color:
                    activeSection === item ? "text.primary" : "text.secondary",
                  fontWeight: "medium",
                }}
              >
                {item}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>

      {/* Icon Stack */}
      <Box sx={{ mt: "auto", pb: 2 }}>
        <Stack direction="row" spacing={1} sx={{ ml: -1.5 }}>
          <IconButton
            href="https://github.com/jazibaskari"
            target="_blank"
            sx={{ color: iconColor, "&:hover": { color: "text.primary" } }}
          >
            <GitHubIcon />
          </IconButton>
          <IconButton
            href="linkedin.com/in/jaz-a-5064209b"
            target="_blank"
            sx={{ color: iconColor, "&:hover": { color: "text.primary" } }}
          >
            <LinkedInIcon />
          </IconButton>
          <IconButton
            href="mailto:jazibaskari@hotmail.co.uk"
            sx={{ color: iconColor, "&:hover": { color: "text.primary" } }}
          >
            <MailOutlineIcon />
          </IconButton>
          <IconButton
            onClick={colourMode.toggleColourMode}
            sx={{ color: iconColor, "&:hover": { color: "text.primary" } }}
          >
            {theme.palette.mode === "dark" ? (
              <Brightness7Icon />
            ) : (
              <Brightness4Icon />
            )}
          </IconButton>
        </Stack>
      </Box>
    </Box>
  );
};

export default HomeSection;
