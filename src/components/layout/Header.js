import React from "react";
import gsap from "gsap";

const Header = () => {
  gsap.from(".test", { y: -50, duration: 0.5, opacity: 0 });
  gsap.from(".test2", {
    y: -50,
    duration: 0.5,
    opacity: 0,
    delay: 0.2,
  });
  gsap.from(".header__paragraph", {
    y: -50,
    duration: 0.5,
    opacity: 0,
    delay: 0.4,
  });
  return (
    <header className="header px">
      <div className="container">
        <div className="header__typography">
          <h4 className="test">
            <span>Hello,</span> I'm Craig Puxty.
          </h4>
          <h1 className="test2">Front-end Developer</h1>
          <div className="header__paragraph">
            <p>
              Browse a selection of my recent projects, or download my CV.
              <br /> Would you like to know more? Let's talk!
            </p>
          </div>
          <button className="btn primary large">Recent Projects</button>
          <button className="btn secondary large">Download CV</button>
        </div>
        <div className="header__image">
          <img
            src="/img/portfolio/min/header/profile-image-min.png"
            alt="Craig Puxty"
          />
          <div></div>
          <div></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
