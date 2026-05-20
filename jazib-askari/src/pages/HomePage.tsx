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
    <Box sx={{ maxWidth: "1600px", mx: "auto" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", md: "40%" },
            position: { md: "sticky" },
            top: { md: "80px" },
            height: { md: "calc(100vh - 80px)" },
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            gap: { xs: 8, md: 12 },
            px: { xs: 2, md: 6 },
            pb: { xs: 6, md: 12 },
          }}
        >
          <HomeSection trigger={navTrigger} />
        </Box>
        <Box
          sx={{
            width: { xs: "100%", md: "60%" },
            display: "flex",
            flexDirection: "column",
            gap: { xs: 1, md: 1 },
            pb: { xs: 2, md: 2 },
          }}
        >
          <AboutSection trigger={navTrigger} />
          <ExperienceSection trigger={navTrigger} />
          <ProjectsSection trigger={navTrigger} />
        </Box>
      </Box>
      <Box>
        <DisclaimerSection />
      </Box>
    </Box>
  );
};

export default HomePage;
