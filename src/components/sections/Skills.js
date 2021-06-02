import React from "react";
import mySkills from "../../data/mySkills";
import SectionTitle from "../shared/SectionTitle";

const Skills = () => {
  return (
    <section id="skills">
      <div className="container">
        <SectionTitle sub="Skills" title="My Experience" />
        <div className="skills-list">
          {mySkills.map((list, index) => (
            <div key={`list-${index}`}>
              <h3>{list.title}</h3>
              <ul className="skills-list__group">
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
