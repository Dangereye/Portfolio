import React from "react";
import mySkills from "../../data/mySkills";

const Skills = () => {
  return (
    <section id="skills">
      <div className="container">
        <h3 className="section-title">Skills</h3>
        <h2 className="section-title">Experience</h2>
        <div className="skills-list">
          {mySkills.map((list, index) => (
            <ul className="skills-list__group" key={`list-${index}`}>
              <h3>{list.title}</h3>
              {list.skills.map((skill, index) => (
                <li className="skills-list__item" key={skill.title}>
                  <img src={skill.svg} alt={skill.title} />
                  <span>{skill.title}</span>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
