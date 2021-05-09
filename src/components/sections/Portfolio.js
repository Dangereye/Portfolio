import React, { useState } from "react";
import { Link } from "react-router-dom";
import myProjects from "../../data/myProjects";

const Portfolio = () => {
  const [option, setOption] = useState("all");
  return (
    <section id="portfolio">
      <h3 className="section-title">Portfolio</h3>
      <h2 className="section-title">Recent Projects</h2>

      <div className="options">
        <button
          className={option === "all" ? "btn option active" : "btn option"}
          onClick={() => setOption("all")}
        >
          All
        </button>
        <button
          className={option === "react" ? "btn option active" : "btn option"}
          onClick={() => setOption("react")}
        >
          React
        </button>
        <button
          className={option === "ps" ? "btn option active" : "btn option"}
          onClick={() => setOption("ps")}
        >
          PS
        </button>
      </div>
      <div className="projects">
        {myProjects
          .filter((item) => (option !== "all" ? item.type === option : item))
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
                  <img src={item.portfolio_image} alt={item.title} />
                </Link>
              </div>
              <div className="project__info">
                <h3 className="project__subtitle">{item.type}</h3>
                <h2 className="project__title">{item.title}</h2>
                <div className="project__date">{item.date}</div>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default Portfolio;
