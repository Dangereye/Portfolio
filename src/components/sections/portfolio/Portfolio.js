import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import myProjects from "../../../data/myProjects";
import useAnimation from "../../../hooks/useAnimation";

const Portfolio = () => {
  const [animIsLoaded, setAnimIsLoaded] = useState(false);
  const animate = useAnimation();

  useEffect(() => {
    if (!animIsLoaded) {
      animate("#portfolio", ".port-title, .project");
      setAnimIsLoaded(true);
    }
  }, [animate, animIsLoaded]);

  return (
    <section id="portfolio">
      <div className="container">
        <div className="port-title section-subtitle">Portfolio</div>
        <h2 className="port-title section-title">Recent Projects</h2>

        <div className="projects">
          {myProjects.map((item) => (
            <div className="project" key={`project-${item.id}`}>
              <div className="project__image">
                <Link to={`/project/${item.id}`}>
                  <img
                    src={item.preview_images.mobile}
                    width="480px"
                    height="270px"
                    alt={item.title}
                  />
                </Link>
              </div>
              <div className="project__info">
                <div className="project__subtitle">{item.type}</div>
                <h3 className="project__title">{item.title}</h3>
                <div className="project__date">{item.date}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
