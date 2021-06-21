import React, { useState, useEffect } from "react";
import ProjectTechnologies from "./ProjectTechnologies";
import ProjectAPIs from "./ProjectAPIs";
import ProjectThirdParty from "./ProjectThirdParty";
import ProjectDeliverables from "./ProjectDeliverables";
import useAnimation from "../../../../hooks/useAnimation";

const ProjectDetails = ({ project }) => {
  const [complete, setComplete] = useState(false);
  const animate = useAnimation();
  useEffect(() => {
    if (!complete) {
      animate("#details", ".project-item", ".project-tech");
      setComplete(true);
    }
  }, [animate, complete]);
  return (
    <div id="details" className="project__details">
      <div className="project__details__main">
        <div className="project__type project-item">
          {project.type} project.
        </div>
        <h1 className="project__title project-item">{project.title}.</h1>

        {project.tech && (
          <ProjectTechnologies project={project} cn="project-tech" />
        )}
        <h2 className="project-item">Description</h2>
        <p className="project-item">{project.description}</p>
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
