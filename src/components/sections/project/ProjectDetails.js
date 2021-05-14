import React from "react";
import ProjectLinkList from "./ProjectLinkList";

const ProjectDetails = ({ project, history }) => {
  return (
    <>
      <h4 className="project__type">
        {project.type} - {project.date}
      </h4>
      <h1 className="project__title">{project.title}.</h1>

      {project.tech && (
        <div className="project__technologies">
          {project.tech.map((tech, index) => (
            <img
              key={`tech-${index}`}
              src={tech.image}
              alt={tech.alt}
              title={tech.alt}
            />
          ))}
        </div>
      )}

      {project.api && <ProjectLinkList title="API" list={project.api} />}

      {project.third_party && (
        <ProjectLinkList title="Third Party" list={project.third_party} />
      )}

      {project.deliverables && (
        <div className="project__third-party">
          <span>Deliverables</span>
          {project.deliverables.map((item, index) => (
            <span key={`deliverable-${index}`}>{item}</span>
          ))}
        </div>
      )}

      <p className="project__description">{project.description}</p>
    </>
  );
};

export default ProjectDetails;
