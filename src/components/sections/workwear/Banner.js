import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Banner = () => {
  useEffect(() => {
    const banner = gsap.timeline({
      scrollTrigger: {
        trigger: "#banner",
        start: "top 300",
        toggleActions: "play none none none",
        markers: false,
      },
    });
    banner.from(".banner-item", {
      y: 100,
      opacity: 0,
      stagger: 0.1,
      duration: 1,
      ease: "back.out(2.5)",
    });
  }, []);
  return (
    <section id="banner">
      <div className="container">
        <div className="section-subtitle banner-item">Banner</div>
        <h2 className="section-title banner-item">Quick Information</h2>
        <p className="section-description banner-item">
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
