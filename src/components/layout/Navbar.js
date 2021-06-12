import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const Navbar = ({ navIsOpen, setNavIsOpen }) => {
  const { pathname } = useLocation();
  const [styles, setStyles] = useState("light");

  const toggleStyles = () => {
    if (window.pageYOffset > 600 || pathname !== "/") {
      setStyles("dark");
    } else {
      setStyles("light");
    }
  };

  useEffect(() => {
    if (pathname !== "/") {
      setStyles("dark");
    } else {
      setStyles("light");
    }
  }, [pathname]);

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
            <Link to="/#portfolio">Portfolio</Link>
          </li>
          <li className="nav__link">
            <Link to="/#skills">Skills</Link>
          </li>
          <li className="nav__link">
            <Link to="/#about">About</Link>
          </li>
          <li className="nav__link">
            <Link to="/#contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
