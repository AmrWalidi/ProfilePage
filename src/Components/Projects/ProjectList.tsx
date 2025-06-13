import ProjectCard from "./ProjectCard";
import { ProjectsDetails } from "../../Data";
import { ProjectsObj } from "../../Data";

interface componentProp {
  setState: React.Dispatch<React.SetStateAction<ProjectsObj | undefined>>;
}
function ProjectsList({ setState }: componentProp) {
  return (
    <div id="project-list" className="project-list">
      {ProjectsDetails.map((project) => (
        <ProjectCard key={project.title} pro={project} setState={setState} />
      ))}
    </div>
  );
}

export default ProjectsList;
