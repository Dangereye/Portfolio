import React, { useEffect } from "react";
import gsap from "gsap";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

const Header = () => {
  const history = useHistory();
  useEffect(() => {
    gsap.from(".header__typography__subtitle", {
      y: -50,
      duration: 0.5,
      opacity: 0,
    });
    gsap.from(".header__typography__title", {
      y: -50,
      duration: 0.5,
      opacity: 0,
      delay: 0.2,
    });
    gsap.from(".header__typography__paragraph", {
      y: -50,
      duration: 0.5,
      opacity: 0,
      delay: 0.4,
    });
  });

  return (
    <header className="header">
      <div className="container">
        <div className="header__typography">
          <div className="header__typography__subtitle">
            <span>Hello,</span> I'm Craig Puxty.
          </div>
          <h1 className="header__typography__title">Front-end Developer</h1>
          <div className="header__typography__paragraph">
            <p>
              Browse a selection of my recent projects, or download my CV.
              <br /> Would you like to know more?{" "}
              <Link to="/#contact">Let's talk!</Link>
            </p>
          </div>
          <button
            className="btn primary large"
            onClick={() => history.push("/#portfolio")}
          >
            Recent Projects
          </button>
          <button className="btn secondary large">Download CV</button>
        </div>
        <div className="header__image">
          <img
            width="600px"
            height="600px"
            src="/img/portfolio/min/header/profile-image-min.jpg"
            alt="Craig Puxty"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
