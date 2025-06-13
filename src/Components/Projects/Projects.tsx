import { useState } from "react";
import Header from "../Header.js";
import ProjectsList from "./ProjectList";
import { ProjectsObj } from "../../Data";
import Popup from "./Popup";

function Projects() {
  const [selectedProject, setSelectedProject] = useState<
    ProjectsObj | undefined
  >(undefined);

  return (
    <div id="projects">
      <div className="divider"></div>
      <Header title="project" />
      <div className="slider">
        <ProjectsList setState={setSelectedProject} />
      </div>
      {selectedProject != undefined && (
        <Popup setState={setSelectedProject} pro={selectedProject} />
      )}
    </div>
  );
}

export default Projects;
