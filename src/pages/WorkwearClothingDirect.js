import React, { useState, useEffect } from "react";
import useScroll from "../hooks/useScroll";
import ProjectDetails from "../components/sections/project/ProjectDetails";
import ProjectPreview from "../components/sections/project/ProjectPreview";
import Banner from "../components/sections/workwear/Banner";
import Categories from "../components/sections/workwear/Categories";
import Slides from "../components/sections/workwear/Slides";
import TopBrands from "../components/sections/workwear/TopBrands";
import Slider from "../components/shared/Slider";
import myProjects from "../data/myProjects";

const WorkwearClothingDirect = ({ match, location, history }) => {
  const [hash, startScroll] = useScroll();
  const project = myProjects.find((x) => x.id === match.params.id);
  const [sliderIsOpen, setSliderIsOpen] = useState(false);
  const [sliderIndex, setSliderIndex] = useState(0);

  const openSlider = (index) => {
    setSliderIndex(index);
    setSliderIsOpen(true);
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
          <div className="project__buttons">
            <button
              className="btn primary large"
              onClick={() => history.push(`${location.pathname}#slides`)}
            >
              More Information
            </button>
            <a
              className="btn secondary large"
              href={project.links.live}
              target="_blank"
              rel="noreferrer"
            >
              Visit Website
            </a>
          </div>

          <ProjectPreview project={project} />
        </div>
      </section>
      <Slides project={project} openSlider={openSlider} />
      <Banner />
      <Categories project={project} />
      <TopBrands project={project} />
      {sliderIsOpen && (
        <Slider
          images={project.slides}
          sliderIndex={sliderIndex}
          setSliderIsOpen={setSliderIsOpen}
        />
      )}
    </>
  );
};

export default WorkwearClothingDirect;
