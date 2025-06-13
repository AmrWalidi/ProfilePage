import { ProjectsObj } from "../../Data";

export interface componentProp {
  pro: ProjectsObj;
  setState: React.Dispatch<React.SetStateAction<ProjectsObj | undefined>>;
}

function ProjectCard({ pro, setState }: componentProp) {
  return (
    <div id="card" className="card">
      <img
        className="image"
        src={pro.image}
        alt={pro.title}
        onClick={() => setState(pro)}
      />
    </div>
  );
}

export default ProjectCard;
