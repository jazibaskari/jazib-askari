import { useState, useEffect, useContext, useRef } from "react";
import {
  Box,
  Typography,
  Stack,
  // IconButton,
  useTheme,
  Button,
} from "@mui/material";
import TextAnimation from "../../animations/AnimatedText";
// import GitHubIcon from "@mui/icons-material/GitHub";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { ColourModeContext } from "../../context/ColourModeContext";

interface HomeSectionProps {
  trigger: number;
}

const navItems = ["about", "experience", "projects"];

const HomeSection = ({ trigger }: HomeSectionProps) => {
  const [activeSection, setActiveSection] = useState("");
  const theme = useTheme();
  const colourMode = useContext(ColourModeContext);
  // const iconColor = "text.secondary";

  const isManualScroll = useRef(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const linkButtonStyle = (theme: any) => ({
    ...theme.typography.body1,
    textTransform: "none",
    color: "text.primary",
    mt: 2,
    padding: 0,
    minWidth: 0,
    justifyContent: "flex-start",
    position: "relative",
    pb: "6px",
    background: "none",
    border: "none",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "transparent",
    },
    "&::after": {
      content: '""',
      position: "absolute",
      bottom: 0,
      left: 0,
      width: "100%",
      height: "3px",
      bgcolor: "background.paper",
      transition: "opacity 0.3s ease",
    },
    "&::before": {
      content: '""',
      position: "absolute",
      bottom: 0,
      left: 0,
      width: "100%",
      height: "3px",
      bgcolor: "text.primary",
      transform: "scaleX(0)",
      transformOrigin: "left",
      transition: "transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
      zIndex: 1,
    },
    "&:hover::before": {
      transform: "scaleX(1)",
    },
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (isManualScroll.current) return;

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-90px 0px -50% 0px",
      }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const handleScroll = (id: string) => {
    const sectionEl = document.getElementById(id);
    const nameEl = document.getElementById("my-name-title");

    if (sectionEl) {
      isManualScroll.current = true;
      setActiveSection(id);

      const targetEl = sectionEl.querySelector("h3") || sectionEl;

      let offset = 100;
      if (nameEl) {
        offset = nameEl.getBoundingClientRect().top;
      }

      window.scrollTo({
        top: targetEl.getBoundingClientRect().top + window.scrollY - offset,
        behavior: "smooth",
      });

      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        isManualScroll.current = false;
      }, 800);
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
          <Typography id="my-name-title" variant="h2" fontWeight="medium">
            jazib askari
          </Typography>
        </TextAnimation>
        <TextAnimation duration={0.6} trigger={trigger}>
          {/* Added mb:2 and fontWeight:500 for new font */}
          <Typography variant="h5" sx={{ mb: 2 }}>
            frontend engineer
          </Typography>
          <TextAnimation duration={0.6} trigger={trigger}>
            <Typography
              variant="body1Montreal"
              sx={{ mb: 0, color: "#bfc0c0", pt: 2, fontWeight: 500 }}
            >
              I build responsive, accessible applications for product-centric
              user experiences.
            </Typography>
          </TextAnimation>
        </TextAnimation>

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
                    activeSection === item ? "text.opp" : "text.secondary",
                  transition: "all 0.3s ease",
                  mr: 2,
                }}
              />
              <Typography
                variant="h5"
                sx={{
                  color: activeSection === item ? "text.opp" : "text.secondary",
                  fontWeight: "medium",
                }}
              >
                {item}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>

      <Box sx={{ mt: "auto", pb: { xs: 10, md: 2 } }}>
        {/* <Box sx={{ mb: 3 }}>
          <Button
            variant="text"
            onClick={colourMode.toggleColourMode}
            sx={linkButtonStyle}
            disableRipple
          >
            {theme.palette.mode === "dark"
              ? "Let there be light"
              : "I prefer the dark"}
          </Button>
        </Box> */}

        <Stack sx={{ mt: 2 }} direction="row" spacing={2} alignItems="center">
          <Button
            variant="text"
            component="a" //
            href="https://github.com/jazibaskari"
            target="_blank"
            rel="noopener noreferrer"
            sx={linkButtonStyle}
            disableRipple
          >
            github
          </Button>
          <Button
            variant="text"
            component="a" //
            href="https://www.linkedin.com/in/jaz-a-5064209b/"
            target="_blank"
            rel="noopener noreferrer"
            sx={linkButtonStyle}
            disableRipple
          >
            linkedin
          </Button>
          <Button
            variant="text"
            component="a" //
            href="mailto:jazibaskari@hotmail.co.uk"
            target="_blank"
            rel="noopener noreferrer"
            sx={linkButtonStyle}
            disableRipple
          >
            mail
          </Button>
          {/* <IconButton
            href="https://github.com/jazibaskari"
            target="_blank"
            sx={{ color: iconColor, "&:hover": { color: "text.primary" } }}
          >
            <GitHubIcon />
          </IconButton>
          <IconButton
            href="https://www.linkedin.com/in/jaz-a-5064209b/"
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
          </IconButton> */}
        </Stack>
      </Box>
    </Box>
  );
};

export default HomeSection;
