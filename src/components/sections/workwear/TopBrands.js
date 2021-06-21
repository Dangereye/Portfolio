import React, { useState, useEffect } from "react";
import useAnimation from "../../../hooks/useAnimation";

const TopBrands = ({ project }) => {
  const [complete, setComplete] = useState(false);
  const animate = useAnimation();
  useEffect(() => {
    if (!complete) {
      animate("#brands", ".brand-item");
      setComplete(true);
    }
  }, [animate, complete]);
  return (
    <section id="brands" className="workwear">
      <div className="container">
        <div className="section-subtitle brand-item">Top</div>
        <h2 className="section-title brand-item">Brands</h2>
        <p className="section-description center brand-item">
          Brand logos, recoloured for use across both platforms.
        </p>
        <div className="top-brands">
          {project.top_brands.map((brand, index) => (
            <div key={`top-brand-${index}`} className="brand brand-item">
              <img src={brand.image} alt={brand.title} />
              <div className="slide__title">{brand.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopBrands;
