import React from "react";

const ProjectPreview = ({ project }) => {
  return (
    <div className="project__preview">
      <img src={project.preview_image} alt={project.title} />
    </div>
  );
};

export default ProjectPreview;
