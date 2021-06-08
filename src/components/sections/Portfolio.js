import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import myProjects from "../../data/myProjects";
import SectionTitle from "../shared/SectionTitle";
gsap.registerPlugin(ScrollTrigger);

const Portfolio = () => {
  const [option, setOption] = useState("all");

  useEffect(() => {
    gsap.from(".option", {
      scale: 0,
      duration: 1,
      stagger: 0.2,
      ease: "back.out(2.5)",
      scrollTrigger: {
        trigger: "#portfolio",
        start: "top center",
        toggleActions: "play none none none",
        markers: true,
      },
    });

    gsap.from(".project", {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.1,
      ease: "back.out(2.5)",
      scrollTrigger: {
        trigger: "#portfolio",
        start: "top 300",
        toggleActions: "play none none none",
        markers: true,
      },
    });
  }, []);
  return (
    <section id="portfolio">
      <div className="container">
        <SectionTitle sub="Portfolio" title="Recent Projects" />

        <div className="options">
          <button
            className={option === "all" ? "btn option active" : "btn option"}
            onClick={() => setOption("all")}
          >
            All
          </button>
          <button
            className={option === "React" ? "btn option active" : "btn option"}
            onClick={() => setOption("React")}
          >
            React
          </button>
          <button
            className={option === "PS" ? "btn option active" : "btn option"}
            onClick={() => setOption("PS")}
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
                    <img src={item.preview_image} alt={item.title} />
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
      </div>
    </section>
  );
};

export default Portfolio;
