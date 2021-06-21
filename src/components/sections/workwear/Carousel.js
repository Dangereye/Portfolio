import React, { useState, useEffect } from "react";
import useAnimation from "../../../hooks/useAnimation";

const Carousel = ({ project, openSlideshow }) => {
  const [complete, setComplete] = useState(false);
  const animate = useAnimation();
  useEffect(() => {
    if (!complete) {
      animate("#carousel", ".carousel-item, .slide");
      setComplete(true);
    }
  }, [animate, complete]);
  return (
    <section id="carousel">
      <div className="container">
        <div className="section-subtitle carousel-item">Carousel</div>
        <h2 className="section-title carousel-item">Hero Images</h2>
        <p className="section-description carousel-item">
          Each image contains multiple layers, composited using numerous learned
          techniques to blend layers onto newly selected/created backgrounds.
          Click any image to view as a slideshow.
        </p>
        <div className="slides">
          {project.slides.map((slide, index) => (
            <div key={`gallery-item-${index}`} className="slide">
              <img
                src={slide.image}
                alt={slide.title}
                onClick={() => openSlideshow(index)}
              />
              <div className="slide__title">{slide.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Carousel;
