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
    <header className="header">
      <div className="container">
        <div className="header__typography">
          <h4 className="test">
            <span>Hello,</span> I'm Craig Puxty.
          </h4>
          <h1 className="test2">Front-end Developer</h1>
          <div className="header__paragraph">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Excepturi reprehenderit voluptatum sapiente rerum fugiat obcaecati
              facere error natus mollitia recusandae.
            </p>
          </div>
          <button className="btn primary large">My Projects</button>
          <button className="btn secondary large">Download CV</button>
        </div>
        <div className="header__image">
          <img src="/img/min/header/profile-image-min.png" alt="Craig Puxty" />
          <div></div>
          <div></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
