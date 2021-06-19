import React, { useEffect } from "react";
import gsap from "gsap";

const ProjectTechnologies = ({ project }) => {
  useEffect(() => {
    gsap.from(".image", { scale: 0, stagger: 0.1, ease: "back.out(4)" });
  }, []);
  return (
    <div className="project__details__technologies">
      {project.tech.map((tech, index) => (
        <img
          className="image"
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
