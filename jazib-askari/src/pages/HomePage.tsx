import HomeSection from "../components/home/HomeSection";
import AboutSection from "../components/about/AboutSection";
import ProjectsSection from "../components/projects/ProjectsSection";
import SkillsSection from "../components/skills/SkillsSection";
interface HomePageProps {
  navTrigger: number;
}
const HomePage = ({ navTrigger }: HomePageProps) => (
  <>
    <HomeSection trigger={navTrigger} />
    <AboutSection trigger={navTrigger} />
    <ProjectsSection trigger={navTrigger} />
    <SkillsSection trigger={navTrigger} />
  </>
);
export default HomePage;