import React from "react";

const Slides = ({ project, openSlider }) => {
  return (
    <section id="slides" className="workwear">
      <div className="container">
        <h3 className="subtitle">Hero Slides</h3>
        <p>
          I created these image compositions using Adobe Photoshop. Product
          images were sourced from supplier websites then cut, adjusted and
          composited together with a little Photoshop know-how. Click an image
          to view in fullscreen.
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
