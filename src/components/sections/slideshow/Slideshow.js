import React, { useState, useEffect } from "react";
import Close from "../../../svg/Close";
import Next from "../../../svg/Next";
import Previous from "../../../svg/Previous";
import gsap from "gsap";
import slides from "../../../data/photoshopSlides";

const Slideshow = ({ slideshowIndex, slideshowIsOpen, setSlideshowIsOpen }) => {
  const [pos, setPos] = useState(0 - slideshowIndex * 100);
  const [activeSlide, setActiveSlide] = useState(slideshowIndex);
  const [activeColor, setActiveColor] = useState(slides[slideshowIndex].color);
  const strokeWidth = 30;

  useEffect(() => setActiveColor(slides[activeSlide].color), [activeSlide]);

  useEffect(() => {
    if (slideshowIsOpen) {
      const slideshow = gsap.timeline();
      slideshow.from(".slider", {
        opacity: 0,
        duration: 0.6,
        ease: "ease",
      });
      slideshow.from(
        ".slider__slide",
        {
          scale: 0,
          opacity: 0,
          duration: 0.6,
          ease: "ease",
        },
        0
      );
      slideshow.from(
        ".slider-prev",
        {
          x: -100,
          opacity: 0,
          duration: 0.6,
          ease: "ease",
        },
        0.3
      );
      slideshow.from(
        ".slider-next",
        {
          x: 100,
          opacity: 0,
          duration: 0.6,
          ease: "ease",
        },
        0.3
      );
      slideshow.from(
        ".slider-navigation",
        {
          y: 100,
          opacity: 0,
          duration: 0.6,
          ease: "ease",
        },
        0.3
      );
      slideshow.from(
        ".slider-close",
        {
          y: -100,
          opacity: 0,
          duration: 0.6,
          ease: "ease",
        },
        0.3
      );
    }
  }, [slideshowIsOpen]);

  const nextSlide = () => {
    if (pos > 0 - (slides.length - 1) * 100) {
      setPos((pos) => pos - 100);
      setActiveSlide((activeSlide) => activeSlide + 1);
    }
  };

  const prevSlide = () => {
    if (pos < 0) {
      setPos((pos) => pos + 100);
      setActiveSlide((activeSlide) => activeSlide - 1);
    }
  };

  const setSlide = (index) => {
    setPos(0 - index * 100);
    setActiveSlide(index);
  };

  return (
    <div className="slider">
      <div className="container">
        <div
          className="slider__wrapper"
          style={{ width: `${100 * slides.length}%`, left: `${pos}%` }}
        >
          {slides.map((item, index) => (
            <div className="slider__slide" key={`slider-slide-${index}`}>
              <picture className="preview-item">
                <source
                  srcSet={item.images.desktop}
                  media="(min-width:961px)"
                />
                <source srcSet={item.images.tablet} media="(max-width:960px)" />
                <source srcSet={item.images.mobile} media="(max-width:480px)" />
                <img
                  src={item.images.desktop}
                  width="1920px"
                  height="1080px"
                  alt={item.title}
                  loading="lazy"
                />
              </picture>
            </div>
          ))}
        </div>
      </div>
      <button className="btn slider-prev glass" onClick={prevSlide}>
        <Previous color={activeColor} stroke={strokeWidth} />
      </button>
      <button className="btn slider-next glass" onClick={nextSlide}>
        <Next color={activeColor} stroke={strokeWidth} />
      </button>
      <button
        className="btn slider-close glass"
        onClick={() => setSlideshowIsOpen(false)}
      >
        <Close color={activeColor} stroke={strokeWidth} />
      </button>
      <div className="navigator">
        {slides.map((item, index) => (
          <button
            className="btn slider-navigation glass"
            key={`navigator-${index}`}
            style={{
              color: pos === 0 - index * 100 ? activeColor : "#f9f9f9",
            }}
            onClick={() => setSlide(index)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Slideshow;
