import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import mySkills from "../../data/mySkills";
import SectionTitle from "../shared/SectionTitle";
gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  useEffect(() => {
    gsap.from(".skills-list__group", {
      y: 100,
      opacity: 0,
      duration: 0.4,
      stagger: 0.1,
      ease: "ease-in",
      scrollTrigger: {
        trigger: "#skills",
        start: "top 101",
        toggleActions: "play none none none",
        markers: true,
      },
    });
  }, []);
  return (
    <section id="skills">
      <div className="container">
        <SectionTitle sub="Skills" title="My Experience" />
        <div className="skills-list">
          {mySkills.map((list, index) => (
            <div key={`list-${index}`} className="skills-list__group">
              <h3>{list.title}</h3>
              <ul>
                {list.skills.map((skill, index) => (
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
