import React from "react";
import myProjects from "../data/myProjects";

const Project = ({ match, history }) => {
  const project = myProjects.find((x) => x.id === match.params.id);
  return (
    <section>
      <div className="container">
        {project ? (
          <>
            <h1>{project.title}</h1>
            <div className="date">{project.date}</div>
            <p>{project.description}</p>
            <h3>Technologies</h3>
            <ul>
              {project.technologies.map((tech, index) => (
                <li key={`tech-${index}`}>{tech}</li>
              ))}
            </ul>
          </>
        ) : (
          history.push("/projects")
        )}
      </div>
    </section>
  );
};

export default Project;
