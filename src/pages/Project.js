import React from "react";
import myProjects from "../data/myProjects";

const Project = ({ match, history }) => {
  const project = myProjects.find((x) => x.id === match.params.id);
  return (
    <section className="project">
      <div className="container">
        {project ? (
          <>
            <h1 className="project__title">
              {project.title} - {project.date}
            </h1>
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
                <a href={project.links.live} target="_blank" rel="noreferrer">
                  Launch App
                </a>
                <a href={project.links.code} target="_blank" rel="noreferrer">
                  View Code
                </a>
              </>
            )}
          </>
        ) : (
          history.push("/projects")
        )}
      </div>
    </section>
  );
};

export default Project;
