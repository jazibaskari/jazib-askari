import { useParams } from "react-router-dom";
import { projects } from "../data/projects";

const ProjectDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);

  if (!project) return <div>Project not found</div>;

  return (
    <div style={{ padding: "2rem" }}>
      <h1>{project.title}</h1>
      <p>{project.details}</p>
    </div>
  );
};

export default ProjectDetailPage;