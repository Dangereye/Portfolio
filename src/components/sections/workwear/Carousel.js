import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Carousel = ({ project, openSlideshow }) => {
  useEffect(() => {
    const carousel = gsap.timeline({
      scrollTrigger: {
        trigger: "#carousel",
        start: "top 300",
        toggleActions: "play none none none",
        markers: false,
      },
    });
    carousel.from(".carousel-item, .slide", {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.1,
      ease: "back.out(2.5)",
    });
  }, []);
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
