import { Box } from "@mui/material";
import HomeSection from "../components/home/HomeSection";
import AboutSection from "../components/about/AboutSection";
import ProjectsSection from "../components/projects/ProjectsSection";
import ExperienceSection from "../components/experience/ExperienceSection";
import DisclaimerSection from "../components/disclaimer/DisclaimerSection";

interface HomePageProps {
  navTrigger: number;
}

const HomePage = ({ navTrigger }: HomePageProps) => {
  return (
    <Box
      sx={{
        maxWidth: "1800px",
        p: { xs: 4, md: "100px" },
        boxSizing: "border-box",
        overflowX: { xs: "hidden", md: "visible" },
        width: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: { md: "flex-start" },
          gap: { md: "200px" },
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", md: "calc(30% - 25px)" },
            position: { md: "sticky" },
            top: { md: "100px" },
            height: { md: "calc(100vh - 200px)" },
            flexShrink: 0,
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <HomeSection trigger={navTrigger} />
        </Box>
        <Box
          sx={{
            width: { xs: "100%", md: "calc(60% - 25px)" },
            display: "flex",
            flexDirection: "column",
            gap: { xs: 8, md: 12 },
            minHeight: { md: "calc(100vh - 200px)" },
          }}
        >
          <AboutSection trigger={navTrigger} />
          <ExperienceSection trigger={navTrigger} />
          <ProjectsSection trigger={navTrigger} />
          <Box sx={{ mt: "auto" }}>
            <DisclaimerSection />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HomePage;
