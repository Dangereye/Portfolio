import React, { useState, useEffect } from "react";
import useAnimation from "../../../hooks/useAnimation";

const Banner = () => {
  const [animIsLoaded, setAnimIsLoaded] = useState(false);
  const animate = useAnimation();
  useEffect(() => {
    if (!animIsLoaded) {
      animate("#banner", ".banner-item");
      setAnimIsLoaded(true);
    }
  }, [animate, animIsLoaded]);
  return (
    <section id="banner">
      <div className="container">
        <div className="section-subtitle banner-item">Banner</div>
        <h2 className="section-title banner-item">Quick Information</h2>
        <p className="section-description center banner-item">
          Provided as a responsive HTML, CSS template including SVG icons for
          WordPress, then three separate images for eBay.
        </p>
        <div className="banner banner-item">
          <div className="banner__block">
            <img
              src="/img/projects/workwear/min/banner/delivery.svg"
              alt="Delivery"
            />
            <div className="banner__content">
              <h3>Standard Delivery</h3>
              <p>
                Order before <strong>4pm.</strong>
                <br /> Spend <strong>£50+</strong> and it's{" "}
                <strong>FREE!</strong>
                <br /> *UK mainland only.
              </p>
            </div>
          </div>
          <div className="banner__block">
            <img
              src="/img/projects/workwear/min/banner/30-days-returns.svg"
              alt="Returns"
            />
            <div className="banner__content">
              <h3>Free Returns</h3>
              <p>We offer 30-day returns at no extra charge.</p>
            </div>
          </div>
          <div className="banner__block">
            <img
              src="/img/projects/workwear/min/banner/discounts.svg"
              alt="Discounts"
            />
            <div className="banner__content">
              <h3>Discounts</h3>
              <p>Discounts are available for larger orders.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
