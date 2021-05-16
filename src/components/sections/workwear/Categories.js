import React from "react";

const Categories = ({ project }) => {
  return (
    <section className="workwear">
      <div className="container">
        <h3 className="subtitle">Categories</h3>
        <p>
          My intention for the{" "}
          <a
            href="https://xd.adobe.com/view/682ffa14-a1cb-4b91-8646-29fc54834cd8-3d7c/?fullscreen"
            target="_blank"
            rel="noreferrer"
          >
            original design
          </a>{" "}
          was a CSS grid layout, which was a little more visually interesting.
          However, as the products were to be initially used with an eBay store
          where I had no control over the layout, the client requested the
          images be uniform in size for consistency across both domains.
        </p>
        <div className="categories">
          {project.categories.map((category, index) => (
            <div
              key={`category-${index}`}
              className="category"
              style={{ backgroundImage: `url(${category.image})` }}
            >
              <h2>{category.title}</h2>
              <button className="btn">Shop now</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
