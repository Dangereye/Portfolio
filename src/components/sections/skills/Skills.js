import React, { useState, useEffect } from "react";
import mySkills from "../../../data/mySkills";
import useAnimation from "../../../hooks/useAnimation";

const Skills = () => {
  const [complete, setComplete] = useState(false);
  const animate = useAnimation();
  useEffect(() => {
    if (!complete) {
      animate("#skills", ".skills-item");
      setComplete(true);
    }
  }, [animate, complete]);
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
