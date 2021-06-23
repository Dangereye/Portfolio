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
      <picture className="preview-item">
        <source srcSet={project.preview_images.desktop} width="1920px" height="1080px" media="(min-width:961px)"/>
        <source srcSet={project.preview_images.tablet} width="960px" height="540px" media="(min-width:481px)"/>
        <source srcSet={project.preview_images.mobile} width="480px" height="270px" media="(max-width:480px)"/>
      <img src={project.preview_images.desktop} width="1920px" height="1080px" alt={project.title} /> 
      </picture>
    </div>
  );
};

export default ProjectPreview;
