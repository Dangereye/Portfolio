import React, { useState, useEffect } from "react";
import useAnimation from "../../../hooks/useAnimation";

const Categories = ({ project }) => {
  const [animIsLoaded, setAnimIsLoaded] = useState(false);
  const animate = useAnimation();
  useEffect(() => {
    if (!animIsLoaded) {
      animate("#categories", ".categories-item");
      setAnimIsLoaded(true);
    }
  }, [animate, animIsLoaded]);
  return (
    <section id="categories">
      <div className="container">
        <div className="section-subtitle categories-item">Categories</div>
        <h2 className="section-title categories-item">Quick Access</h2>
        <p className="section-description categories-item">
          The{" "}
          <a
            href="https://xd.adobe.com/view/682ffa14-a1cb-4b91-8646-29fc54834cd8-3d7c/?fullscreen"
            target="_blank"
            rel="noreferrer"
          >
            original concept
          </a>{" "}
          was a CSS grid layout. However, as there was no direct access to eBays
          template code, a compromise was to use predetermined (by eBay) sizes
          for consistency across platforms. WordPress using background images
          with rich HTML text for SEO purposes, eBay using pure imagery.
        </p>
        <div className="categories">
          {project.categories.map((category, index) => (
            <div
              key={`category-${index}`}
              className="category categories-item"
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
