import gsap from "gsap/gsap-core";
import React, { useEffect } from "react";

const ProjectPreview = ({ project }) => {
  useEffect(() => {
    gsap.from(".project__preview", {
      delay: 0.8,
      y: 100,
      opacity: 0,
      duration: 1,
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
