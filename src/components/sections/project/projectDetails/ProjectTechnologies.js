import React from "react";

const ProjectTechnologies = ({ project, cn }) => {
  return (
    <div className="project__details__technologies">
      {project.tech.map((tech, index) => (
        <img
          className={`image ${cn}`}
          key={`tech-${index}`}
          src={tech.image}
          alt={tech.alt}
          title={tech.alt}
        />
      ))}
    </div>
  );
};

export default ProjectTechnologies;
