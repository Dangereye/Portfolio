import React from "react";
import ProjectTechnologies from "./ProjectTechnologies";
import ProjectAPIs from "./ProjectAPIs";
import ProjectThirdParty from "./ProjectThirdParty";
import ProjectDeliverables from "./ProjectDeliverables";

const ProjectDetails = ({ project }) => {
  return (
    <div className="project__details">
      <div className="project__details__main">
        <div className="project__type">{project.type} project.</div>
        <h1 className="project__title">{project.title}.</h1>

        {project.tech && <ProjectTechnologies project={project} />}
        <h2>Description</h2>
        <p>{project.description}</p>
      </div>
      <div className="project__details__extra">
        {project.api && <ProjectAPIs list={project.api} />}
        {project.third_party && (
          <ProjectThirdParty list={project.third_party} />
        )}
        {project.deliverables && (
          <ProjectDeliverables list={project.deliverables} />
        )}
      </div>
    </div>
  );
};

export default ProjectDetails;
