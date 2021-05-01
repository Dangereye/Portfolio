import React, { useState } from "react";
import { Link } from "react-router-dom";
import myProjects from "../../data/myProjects";

const Portfolio = () => {
  const [option, setOption] = useState("react");
  return (
    <section id="projects">
      <div className="container">
        <h3>Portfolio</h3>
        <h2>My Projects</h2>

        <div className="options">
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

        {option === "react" && (
          <div className="react-apps">
            {myProjects.map((app) => (
              <div className="react-app" key={`project-${app.id}`}>
                <div className="react-app__image">
                  <Link to={`/project/${app.id}`}>
                    <img src={app.image} alt={app.title} />
                  </Link>
                </div>
                <div className="react-app__title">{app.title}</div>
                <div className="react-app__date">{app.date}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
