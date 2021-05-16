import React from "react";

const TopBrands = ({ project }) => {
  return (
    <section className="workwear">
      <div className="container">
        <h3 className="subtitle">Top brands</h3>
        <p>
          Simple jpeg images with hyperlinks to the relevant products, adjusted
          in Adobe Photoshop for use across both platforms.
        </p>
        <div className="top-brands">
          {project.top_brands.map((brand, index) => (
            <div key={`top-brand-${index}`} className="brand">
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
