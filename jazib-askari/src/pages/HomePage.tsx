import HomeSection from "../components/home/HomeSection";
import AboutSection from "../components/about/AboutSection";
import ProjectsSection from "../components/projects/ProjectsSection";
interface HomePageProps {
  navTrigger: number;
}
const HomePage = ({ navTrigger }: HomePageProps) => (
  <>
    <HomeSection trigger={navTrigger} />
    <AboutSection trigger={navTrigger} />
    <ProjectsSection trigger={navTrigger} />
  </>
);
export default HomePage;