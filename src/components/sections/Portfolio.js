import React, { useState } from "react";
import { Link } from "react-router-dom";
import myProjects from "../../data/myProjects";

const Portfolio = () => {
  const [option, setOption] = useState("all");
  return (
    <section id="portfolio">
      <div className="container">
        <h3>Portfolio</h3>
        <h2>My Projects</h2>

        <div className="options">
          <button
            className={option === "all" ? "option active" : "option"}
            onClick={() => setOption("all")}
          >
            All
          </button>
          <button
            className={option === "react" ? "option active" : "option"}
            onClick={() => setOption("react")}
          >
            React
          </button>
          <button
            className={option === "ps" ? "option active" : "option"}
            onClick={() => setOption("ps")}
          >
            PS
          </button>
          <button
            className={option === "xd" ? "option active" : "option"}
            onClick={() => setOption("xd")}
          >
            XD
          </button>
        </div>
        <div className="react-apps">
          {myProjects
            .filter((item) => (option !== "all" ? item.type === option : item))
            .map((item) => (
              <div className="react-app" key={`project-${item.id}`}>
                <div className="react-app__image">
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
                <div className="react-app__title">{item.title}</div>
                <div className="react-app__date">{item.date}</div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
