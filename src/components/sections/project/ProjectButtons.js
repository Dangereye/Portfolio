import React from "react";
import { Link } from "react-router-dom";

const ProjectButtons = ({ project }) => {
  return (
    <div className="project__buttons">
      {project.buttons.primary &&
        (project.buttons.primary.type === "anchor" ? (
          <a
            href={project.buttons.primary.url}
            target="_blank"
            rel="noreferrer"
            className={`btn ${project.buttons.primary.styles}`}
          >
            {project.buttons.primary.text}
          </a>
        ) : (
          <Link
            to={project.buttons.primary.url}
            className={`btn ${project.buttons.primary.styles}`}
          >
            {project.buttons.primary.text}
          </Link>
        ))}
      {project.buttons.secondary && (
        <a
          href={project.buttons.secondary.url}
          target="_blank"
          rel="noreferrer"
          className={`btn ${project.buttons.secondary.styles}`}
        >
          {project.buttons.secondary.text}
        </a>
      )}
    </div>
  );
};

export default ProjectButtons;
