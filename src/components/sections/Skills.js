import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import mySkills from "../../data/mySkills";
gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  useEffect(() => {
    gsap.from(".skills-item", {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.1,
      ease: "back.out(2.5)",
      scrollTrigger: {
        trigger: "#skills",
        start: "top 300",
        toggleActions: "play none none none",
        markers: false,
      },
    });
  }, []);
  return (
    <section id="skills">
      <div className="container">
        <div className="skills-item section-subtitle">Skills</div>
        <h2 className="skills-item section-title">My Experience</h2>
        <div className="skills-list">
          {mySkills.map((list, index) => (
            <div
              key={`list-${index}`}
              className="skills-list__group skills-item"
            >
              <h3>{list.title}</h3>
              <ul>
                {list.skills.map((skill) => (
                  <li className="skills-list__item" key={skill.title}>
                    <img src={skill.svg} alt={skill.title} />
                    <span>{skill.title}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
