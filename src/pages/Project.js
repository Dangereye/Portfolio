import React, { useEffect } from "react";
import myProjects from "../data/myProjects";

const Project = ({ match, history }) => {
  const project = myProjects.find((x) => x.id === match.params.id);

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <section className="project">
      <div className="container">
        {project ? (
          <>
            <h4 className="project__type">{project.type}</h4>
            <h1 className="project__title">{project.title}.</h1>
            <div className="project__date">Created: {project.date}</div>
            <p className="project__description">{project.description}</p>
            {project.api && (
              <>
                <h3 className="subtitle">API</h3>
                <ul className="project__api">
                  {project.api.map((api, index) => (
                    <li key={`api-${index}`}>{api}</li>
                  ))}
                </ul>
              </>
            )}
            {project.technologies && (
              <>
                <h3 className="subtitle">Technologies</h3>
                <ul className="project__technologies">
                  {project.technologies.map((tech, index) => (
                    <li key={`tech-${index}`}>{tech}</li>
                  ))}
                </ul>
              </>
            )}
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
            <div className="preview">
              <img src={project.preview_image} alt={project.title} />
            </div>
          </>
        ) : (
          history.push("/projects")
        )}
      </div>
    </section>
  );
};

export default Project;
