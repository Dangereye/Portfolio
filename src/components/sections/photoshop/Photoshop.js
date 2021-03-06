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
      duration: 2,
      opacity: 1,
      ease: "ease-out",
    });
  }, []);
  return (
    <section id="photoshop">
      <div className="container">
        <div className="photoshop-item section-subtitle">Photoshop</div>
        <h2 className="photoshop-item section-title">Carousel Showcase</h2>
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
                width="1364px"
                height="582px"
                alt="Beechfield product"
                loading="lazy"
              />
            </picture>
          </div>
          <div className="hero__final">
            <picture>
              <source
                srcSet="/img/portfolio/min/photoshop/beechfield-morf-desktop.jpg"
                media="(min-width:961px)"
              />
              <source
                srcSet="/img/portfolio/min/photoshop/beechfield-morf-tablet.jpg"
                media="(max-width:960px)"
              />
              <source
                srcSet="/img/portfolio/min/photoshop/beechfield-morf-mobile.jpg"
                media="(max-width:480px)"
              />
              <img
                src="/img/portfolio/min/photoshop/beechfield-morf-desktop.jpg"
                width="1364px"
                height="582px"
                alt="Beechfield product"
                loading="lazy"
              />
            </picture>
          </div>
        </div>
        <div className="slides">
          {slides.map((slide, index) => (
            <div key={`gallery-item-${index}`} className="slide photoshop-item">
              <img
                src={slide.images.mobile}
                width="326px"
                height="140px"
                alt={slide.title}
                onClick={() => openSlideshow(index)}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Photoshop;
