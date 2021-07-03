import React, { useEffect } from "react";
import slides from "../../../data/photoshopSlides";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Photoshop = ({ openSlideshow }) => {
  useEffect(() => {
    const hero = gsap.timeline({
      scrollTrigger: {
        trigger: "#photoshop",
        start: "top 300px",
        toggleActions: "play none none none",
        markers: false,
      },
    });
    hero.from(".photoshop-item", {
      y: 100,
      opacity: 0,
      duration: 0.7,
      stagger: 0.1,
      ease: "back.out(2.5)",
    });
    hero.to(".hero__final", {
      clipPath: "circle(100% at 50% 50%)",
      opacity: 1,
      duration: 2,
    });
  }, []);
  return (
    <section id="photoshop">
      <div className="container">
        <div className="photoshop-item section-subtitle">Photoshop</div>
        <h2 className="photoshop-item section-title">Showcase</h2>
        <div className="hero photoshop-item">
          <div className="hero__cutouts">
            <picture>
              <source
                srcSet="/img/portfolio/min/photoshop/composite-desktop.jpg"
                media="(min-width:961px)"
              />
              <source
                srcSet="/img/portfolio/min/photoshop/composite-tablet.jpg"
                media="(max-width:960px)"
              />
              <source
                srcSet="/img/portfolio/min/photoshop/composite-mobile.jpg"
                media="(max-width:480px)"
              />
              <img
                src="/img/portfolio/min/photoshop/composite-desktop.jpg"
                alt="Beechfield product"
                loading="lazy"
              />
            </picture>
          </div>
          <div className="hero__final">
            <picture>
              <source
                srcSet="/img/portfolio/min/photoshop/composite-final-desktop.jpg"
                media="(min-width:961px)"
              />
              <source
                srcSet="/img/portfolio/min/photoshop/composite-final-tablet.jpg"
                media="(max-width:960px)"
              />
              <source
                srcSet="/img/portfolio/min/photoshop/composite-final-mobile.jpg"
                media="(max-width:480px)"
              />
              <img
                src="/img/portfolio/min/photoshop/composite-final-desktop.jpg"
                alt="Beechfield product"
                loading="lazy"
              />
            </picture>
          </div>
        </div>
        <div className="slides">
          {slides.map((slide, index) => (
            <div key={`gallery-item-${index}`} className="slide">
              <img
                src={slide.images.mobile}
                alt={slide.title}
                onClick={() => openSlideshow(index)}
                loading="lazy"
              />

              {/* <div className="slide__title">{slide.title}</div> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Photoshop;
