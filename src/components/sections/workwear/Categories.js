import React from "react";

const Categories = ({ project }) => {
  return (
    <section className="workwear">
      <div className="container">
        <h3 className="subtitle">Categories</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
          reiciendis qui inventore sunt quos doloremque nostrum, in, eius,
          corporis accusamus quidem? Odit qui nihil et provident delectus
          tenetur voluptatum cumque!
        </p>
        <div className="categories">
          {project.categories.map((category, index) => (
            <div
              key={`category-${index}`}
              className="category"
              style={{ backgroundImage: `url(${category.image})` }}
            >
              <h2>{category.title}</h2>
              <button>Shop now</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
