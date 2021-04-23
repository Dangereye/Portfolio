import React from "react";

const Navbar = ({ navIsOpen, setNavIsOpen }) => {
  return (
    <nav className="nav">
      <div className="container">
        <div
          className={navIsOpen ? "nav__mobile-menu open" : "nav__mobile-menu"}
          onClick={() => setNavIsOpen(!navIsOpen)}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <div className="nav__logo">Pux.</div>
        <ul className="nav__links">
          <li className="nav__link">Portfolio</li>
          <li className="nav__link">About</li>
          <li className="nav__link">Download CV</li>
          <li className="nav__link">Contact</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
