import React from "react";

const Skills = () => {
  return (
    <section id="skills">
      <div className="container">
        <h3>Skills</h3>
        <h2>Most Common</h2>
        <div className="skills-list">
          <ul className="skills-list__group">
            <h3>Environment</h3>
            <li className="skills-list__item">
              <img src="/img/svg/win64.svg" alt="Windows" />
              <span>Windows</span>
            </li>
            <li className="skills-list__item">
              <img src="/img/svg/vscode.svg" alt="Visual studio code" />
              <span>VS Code</span>
            </li>
            <li className="skills-list__item">
              <img src="/img/svg/github.svg" alt="Github" />
              <span>Github</span>
            </li>
            <li className="skills-list__item">
              <img src="/img/svg/google.svg" alt="Google Chrome" />
              <span>Google Chrome</span>
            </li>
          </ul>
          <ul className="skills-list__group">
            <h3>Languages </h3>
            <li className="skills-list__item">
              <img src="/img/svg/html5.svg" alt="HTML 5" />
              <span>HTML 5</span>
            </li>
            <li className="skills-list__item">
              <img src="/img/svg/css3.svg" alt="CSS 3" />
              <span>CSS 3</span>
            </li>
            <li className="skills-list__item">
              <img src="/img/svg/sass.svg" alt="SASS" />
              <span>SCSS</span>
            </li>
            <li className="skills-list__item">
              <img src="/img/svg/js.svg" alt="Javascript" />
              <span>Javascript</span>
            </li>
          </ul>
          <ul className="skills-list__group">
            <h3>Frameworks</h3>
            <li className="skills-list__item">
              <img src="/img/svg/react.svg" alt="React" />
              <span>React</span>
            </li>
          </ul>
          <ul className="skills-list__group">
            <h3>Design Tools</h3>
            <li className="skills-list__item">
              <img src="/img/svg/ps.svg" alt="Windows" />
              <span>Photoshop</span>
            </li>
            <li className="skills-list__item">
              <img src="/img/svg/ai.svg" alt="Visual studio code" />
              <span>Illustrator</span>
            </li>
            <li className="skills-list__item">
              <img src="/img/svg/xd.svg" alt="Visual studio code" />
              <span>Experience Design</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
