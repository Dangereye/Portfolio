import React from "react";

const Categories = ({ project }) => {
  return (
    <section id="categories" className="workwear">
      <div className="container">
        <h3 className="subtitle">Categories section</h3>
        <p>
          The{" "}
          <a
            href="https://xd.adobe.com/view/682ffa14-a1cb-4b91-8646-29fc54834cd8-3d7c/?fullscreen"
            target="_blank"
            rel="noreferrer"
          >
            original concept
          </a>{" "}
          was based on a CSS grid layout, however, because of an inability to
          edit the eBay store template, a compromise had to be made. To achieve
          the desired result, images at predetermined sizes were necessary. A
          similar style was applied to WordPress to keep consistency, but using
          background images with rich HTML text for SEO with the addition of an
          interactive button.
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
