import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import myProjects from "../../../data/myProjects";
import Button from "../../shared/buttons/Button";

gsap.registerPlugin(ScrollTrigger);

const Portfolio = () => {
  const [option, setOption] = useState("All");
  const style = { active: "btn option active", inactive: "btn option" };

  const options = (e) => {
    setOption(e.target.innerText);
  };

  useEffect(() => {
    const port = gsap.timeline({
      scrollTrigger: {
        trigger: "#portfolio",
        start: "top center",
        toggleActions: "play none none none",
        markers: false,
      },
    });
    port.from(".port-title, .project", {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.1,
      ease: "back.out(2.5)",
    });
    port.from(
      ".option",
      {
        scale: 0,
        duration: 1,
        stagger: 0.2,
        ease: "back.out(2.5)",
      },
      1
    );
  }, []);
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
