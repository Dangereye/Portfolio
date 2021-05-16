import React from "react";

const Slides = ({ project, openSlider }) => {
  return (
    <section id="slides" className="workwear">
      <div className="container">
        <h3 className="subtitle">Carousel images</h3>
        <p>
          Each composition was created using Adobe Photoshop at 2x its display
          size to preserve quality on higher resolution screens. Encompassing a
          variety of techniques from cutting, masking, matching colours and
          brightness, painting shadows and more. Image optimisation using
          Optimizilla.
        </p>
        <div className="slides">
          {project.slides.map((slide, index) => (
            <div key={`gallery-item-${index}`} className="slide">
              <img
                src={slide.image}
                alt={slide.title}
                onClick={() => openSlider(index)}
              />
              <div className="slide__title">{slide.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Slides;
