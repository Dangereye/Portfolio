import React, { useState } from "react";

const Projects = () => {
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
            <div className="react-app">
              <div className="react-app__image">
                <img
                  src="/img/min/projects/movies-project-min.jpg"
                  alt="TMDB Movies"
                />
              </div>

              <div className="react-app__title">TMDB Movies - 2021</div>
            </div>

            <div className="react-app">
              <div className="react-app__image">
                <img
                  src="/img/min/projects/weather-project-min.jpg"
                  alt="TMDB Movies"
                />
              </div>

              <div className="react-app__title">The Weather - 2021</div>
            </div>

            <div className="react-app">
              <div className="react-app__image">
                <img
                  src="/img/min/projects/starwars-project-min.jpg"
                  alt="TMDB Movies"
                />
              </div>

              <div className="react-app__title">Starwars - 2021</div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
