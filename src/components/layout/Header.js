import React from "react";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__typography">
          <h4>
            <span>Hello,</span> I'm Craig Puxty.
          </h4>
          <h1>Front-end Developer</h1>
          <div className="header__paragraph">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Excepturi reprehenderit voluptatum sapiente rerum fugiat obcaecati
              facere error natus mollitia recusandae.
            </p>
          </div>
          <button>My Projects</button>
          <button>Download CV</button>
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
