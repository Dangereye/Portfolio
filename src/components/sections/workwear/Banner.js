import React from "react";

const Banner = () => {
  return (
    <section id="banner" className="workwear">
      <div className="container">
        <h3 className="subtitle">Banner</h3>
        <p>
          The banner was provided as both a responsive HTML, CSS template with
          SVG icons and as 3 separate images for use with eBay.
        </p>
        <div className="banner">
          <div className="banner__block">
            <img
              src="/img/projects/workwear/min/banner/delivery.svg"
              alt="Delivery"
            />
            <div className="banner____content">
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
            <div className="banner____content">
              <h3>Free Returns</h3>
              <p>We offer 30-day returns at no extra charge.</p>
            </div>
          </div>
          <div className="banner__block">
            <img
              src="/img/projects/workwear/min/banner/discounts.svg"
              alt="Discounts"
            />
            <div className="banner____content">
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
