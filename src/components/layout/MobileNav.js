import React from "react";
import { Link } from "react-router-dom";

const MobileNav = ({ navIsOpen, setNavIsOpen }) => {
  return (
    <nav className={navIsOpen ? "mobile-nav open" : "mobile-nav"}>
      <h4>Navigation </h4>
      <ul className="mobile-nav__links">
        <li className="mobile-nav__link">
          <Link to="/#portfolio" onClick={() => setNavIsOpen(false)}>
            Portfolio
          </Link>
        </li>
        <li className="mobile-nav__link">
          <Link to="/#skills" onClick={() => setNavIsOpen(false)}>
            Skills
          </Link>
        </li>

        <li className="mobile-nav__link">
          <Link to="/#about" onClick={() => setNavIsOpen(false)}>
            About
          </Link>
        </li>
        <li className="mobile-nav__link">
          <Link to="/#contact" onClick={() => setNavIsOpen(false)}>
            Contact
          </Link>
        </li>
      </ul>
      <h4>Downloads</h4>
      <ul className="mobile-nav__links">
        <li className="mobile-nav__link">
          <a href="/cv/cv.txt" download>
            Curriculum vitae
          </a>
        </li>
      </ul>
      <h4>Email</h4>
      <ul className="mobile-nav__links">
        <li className="mobile-nav__link">
          <a href="mailto:craig_puxty@talktalk.net">craig_puxty@talktalk.net</a>
        </li>
      </ul>
    </nav>
  );
};

export default MobileNav;
