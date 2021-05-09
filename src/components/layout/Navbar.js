import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ navIsOpen, setNavIsOpen }) => {
  const [styles, setStyles] = useState();

  const toggleStyles = () => {
    if (window.pageYOffset > 100) {
      setStyles("dark");
    } else {
      setStyles("light");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleStyles);

    return () => window.removeEventListener("scroll", toggleStyles);
  });
  return (
    <nav className={`nav ${styles}`}>
      <div className="container">
        <div
          className={navIsOpen ? "nav__mobile-menu open" : "nav__mobile-menu"}
          onClick={() => setNavIsOpen(!navIsOpen)}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <Link to="/" className="nav__logo">
          Pux.
        </Link>

        <ul className="nav__links">
          <li className="nav__link">
            <Link to="/projects">Portfolio</Link>
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
