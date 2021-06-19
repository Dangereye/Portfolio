import React, { useState, useEffect } from "react";
import useScroll from "../hooks/useScroll";
import myProjects from "../data/myProjects";
import ProjectDetails from "../components/sections/project/ProjectDetails";
import ProjectButtons from "../components/sections/project/ProjectButtons";
import ProjectPreview from "../components/sections/project/ProjectPreview";
import Carousel from "../components/sections/workwear/Carousel";
import Banner from "../components/sections/workwear/Banner";
import Categories from "../components/sections/workwear/Categories";
import TopBrands from "../components/sections/workwear/TopBrands";
import Slideshow from "../components/shared/slideshow/Slideshow";

const WorkwearClothingDirect = ({ match }) => {
  const [hash, startScroll] = useScroll();
  const project = myProjects.find((x) => x.id === match.params.id);
  const [slideshowIsOpen, setSlideshowIsOpen] = useState(false);
  const [slideshowIndex, setSlideshowIndex] = useState(0);

  const openSlideshow = (index) => {
    setSlideshowIndex(index);
    setSlideshowIsOpen(true);
  };

  useEffect(() => {
    const target = document.getElementById(hash);
    startScroll(target);
  });

  return (
    <>
      <section className="project workwear">
        <div className="container">
          <ProjectDetails project={project} />
          <ProjectButtons project={project} />
          <ProjectPreview project={project} />
        </div>
      </section>
      <Carousel project={project} openSlideshow={openSlideshow} />
      <Banner />
      <Categories project={project} />
      <TopBrands project={project} />
      {slideshowIsOpen && (
        <Slideshow
          images={project.slides}
          slideshowIndex={slideshowIndex}
          setSlideshowIsOpen={setSlideshowIsOpen}
        />
      )}
    </>
  );
};

export default WorkwearClothingDirect;
