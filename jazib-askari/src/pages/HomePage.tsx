
import HomeSection from "../components/home/HomeSection";
import AboutSection from "../components/about/AboutSection";
import ProjectsSection from "../components/projects/ProjectsSection";
import SkillsSection from "../components/skills/SkillsSection";
import ExperienceSection from "../components/experience/ExperienceSection";
import DisclaimerSection from "../components/disclaimer/DisclaimerSection";

interface HomePageProps {
  navTrigger: number;
}

const HomePage = ({ navTrigger }: HomePageProps) => (
  <>
    <HomeSection trigger={navTrigger} />
    <AboutSection trigger={navTrigger} />
    <ExperienceSection trigger={navTrigger}/>
    <ProjectsSection trigger={navTrigger} />
    <SkillsSection trigger={navTrigger} />
    <DisclaimerSection  />
  </>
);

export default HomePage;