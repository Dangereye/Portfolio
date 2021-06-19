import React from "react";

const Carousel = ({ project, openSlideshow }) => {
  return (
    <section id="carousel" className="workwear">
      <div className="container">
        <h3 className="subtitle">Carousel images</h3>
        <p>
          Each image contains multiple layers composited using numerous learned
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
