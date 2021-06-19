import React, { useState, useEffect } from "react";
import Close from "../../../svg/Close";
import Next from "../../../svg/Next";
import Previous from "../../../svg/Previous";
import gsap from "gsap";

const Slideshow = ({
  images,
  slideshowIndex,
  slideshowIsOpen,
  setSlideshowIsOpen,
}) => {
  const [pos, setPos] = useState(0 - slideshowIndex * 100);
  const [activeSlide, setActiveSlide] = useState(slideshowIndex);
  const [activeColor, setActiveColor] = useState(images[slideshowIndex].color);
  const strokeWidth = 30;

  useEffect(
    () => setActiveColor(images[activeSlide].color),
    [images, activeSlide]
  );

  useEffect(() => {
    if (slideshowIsOpen) {
      console.log("slider");
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
    if (pos > 0 - (images.length - 1) * 100) {
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
          style={{ width: `${100 * images.length}%`, left: `${pos}%` }}
        >
          {images.map((item, index) => (
            <div className="slider__slide" key={`slider-slide-${index}`}>
              <img src={item.image} alt={item.title} />
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
        {images.map((item, index) => (
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
