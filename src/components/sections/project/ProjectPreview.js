import gsap from "gsap/gsap-core";
import React, { useEffect } from "react";

const ProjectPreview = ({ project }) => {
  useEffect(() => {
    gsap.from(".project__preview", {
      delay: 2.5,
      y: 100,
      opacity: 0,
      duration: 2,
      ease: "back.out(2.5)",
    });
  }, []);
  return (
    <div className="project__preview">
      <img src={project.preview_image} alt={project.title} />
    </div>
  );
};

export default ProjectPreview;
