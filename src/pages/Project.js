import React, { useEffect } from "react";
import ProjectDetails from "../components/sections/project/ProjectDetails";
import ProjectButtons from "../components/sections/project/ProjectButtons";
import ProjectPreview from "../components/sections/project/ProjectPreview";

import myProjects from "../data/myProjects";

const Project = ({ match, history }) => {
  const project = myProjects.find((x) => x.id === match.params.id);

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      {project ? (
        <section className="project">
          <div className="container">
            <ProjectDetails project={project} />
            <ProjectButtons project={project} />
            <ProjectPreview project={project} />
          </div>
        </section>
      ) : (
        history.push("/#portfolio")
      )}
    </>
  );
};

export default Project;
