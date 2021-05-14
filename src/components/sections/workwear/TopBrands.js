import React from "react";

const TopBrands = ({ project }) => {
  return (
    <section className="workwear">
      <div className="container">
        <h3 className="subtitle">Top brands</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
          reiciendis qui inventore sunt quos doloremque nostrum, in, eius,
          corporis accusamus quidem? Odit qui nihil et provident delectus
          tenetur voluptatum cumque!
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
