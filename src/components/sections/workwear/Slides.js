import React from "react";

const Slides = ({ project, openSlider }) => {
  return (
    <section id="slides" className="workwear">
      <div className="container">
        <h3 className="subtitle">Hero Slides</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo officia
          accusantium, est obcaecati sint veniam in quo, quas aliquam quis
          temporibus sed? Iure repudiandae pariatur labore illum corporis, rem
          architecto?
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
