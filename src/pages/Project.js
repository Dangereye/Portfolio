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
            <h4 className="project__type">
              {project.type} - {project.date}
            </h4>
            <h1 className="project__title">{project.title}.</h1>

            {project.tech && (
              <>
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
              </>
            )}

            {project.api && (
              <div className="project__api">
                <span>API</span>
                {project.api.map((item, index) => (
                  <a
                    key={`api-${index}`}
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {item.title}
                  </a>
                ))}
              </div>
            )}

            {project.third_party && (
              <div className="project__third-party">
                <span>Third party</span>
                {project.third_party.map((item, index) => (
                  <a
                    key={`third-party-${index}`}
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {item.title}
                  </a>
                ))}
              </div>
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

            <div className="project__preview">
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
