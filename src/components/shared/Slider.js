import React, { useState, useEffect } from "react";
import Close from "../../svg/Close";
import Next from "../../svg/Next";
import Previous from "../../svg/Previous";

const Slider = ({ images, sliderIndex, setSliderIsOpen }) => {
  const [pos, setPos] = useState(0 - sliderIndex * 100);
  const [activeSlide, setActiveSlide] = useState(sliderIndex);
  const [btnColor, setBtnColor] = useState(images[sliderIndex].color);
  const strokeWidth = 30;

  useEffect(() => setBtnColor(images[activeSlide].color), [
    images,
    activeSlide,
  ]);

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
      <button className="prev" onClick={prevSlide}>
        <Previous color={btnColor} stroke={strokeWidth} />
      </button>
      <button className="next" onClick={nextSlide}>
        <Next color={btnColor} stroke={strokeWidth} />
      </button>
      <button className="close" onClick={() => setSliderIsOpen(false)}>
        <Close color={btnColor} stroke={strokeWidth} />
      </button>
      <div className="navigator">
        {images.map((item, index) => (
          <div
            key={`navigator-${index}`}
            style={{
              backgroundColor: pos === 0 - index * 100 ? btnColor : "#fefefe",
            }}
            onClick={() => setSlide(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
