import React from "react";
import { Link } from "react-router-dom";

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
        <div className={navIsOpen ? "nav__logo open" : "nav__logo"}>Pux.</div>
        <ul className="nav__links">
          <li className="nav__link">
            <Link to="/">Portfolio</Link>
          </li>
          <li className="nav__link">
            <Link to="/about">About</Link>
          </li>
          <li className="nav__link">Download CV</li>
          <li className="nav__link">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
