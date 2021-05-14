import React from "react";

const ProjectButtons = ({ project }) => {
  return (
    <div className="project__buttons">
      <a
        className="btn primary large"
        href={project.links.live}
        target="_blank"
        rel="noreferrer"
      >
        Launch Website
      </a>
      <a
        className="btn secondary large"
        href={project.links.code}
        target="_blank"
        rel="noreferrer"
      >
        View Code
      </a>
    </div>
  );
};

export default ProjectButtons;
