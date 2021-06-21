import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import myProjects from "../../../data/myProjects";
import useAnimation from "../../../hooks/useAnimation";
import Button from "../../shared/buttons/Button";

const Portfolio = () => {
  const [complete, setComplete] = useState(false);
  const [option, setOption] = useState("All");
  const style = { active: "btn option active", inactive: "btn option" };
  const animate = useAnimation();

  const options = (e) => {
    setOption(e.target.innerText);
  };
  useEffect(() => {
    if (!complete) {
      animate("#portfolio", ".port-title, .project", ".option");
      setComplete(true);
    }
  }, [animate, complete]);

  return (
    <section id="portfolio">
      <div className="container">
        <div className="port-title section-subtitle">Portfolio</div>
        <h2 className="port-title section-title">Recent Projects</h2>

        <div className="options">
          <Button
            cn={option === "All" ? style.active : style.inactive}
            fn={options}
            text="All"
          />
          <Button
            cn={option === "React" ? style.active : style.inactive}
            fn={options}
            text="React"
          />
          <Button
            cn={option === "Photoshop" ? style.active : style.inactive}
            fn={options}
            text="Photoshop"
          />
        </div>

        <div className="projects">
          {myProjects
            .filter((item) => (option !== "All" ? item.type === option : item))
            .map((item) => (
              <div className="project" key={`project-${item.id}`}>
                <div className="project__image">
                  <Link
                    to={
                      item.page
                        ? `/project/${item.id}/${item.page}`
                        : `/project/${item.id}`
                    }
                  >
                    <img src={item.preview_image} alt={item.title} />
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
