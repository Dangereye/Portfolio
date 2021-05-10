import React from "react";
import { Link } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import { IoMdPerson, IoMdBrush } from "react-icons/io";
import { HiDocumentDownload } from "react-icons/hi";
import { FaComments } from "react-icons/fa";

const MobileNav = ({ navIsOpen, setNavIsOpen }) => {
  return (
    <nav className={navIsOpen ? "mobile-nav open" : "mobile-nav"}>
      <ul className="mobile-nav__links">
        <li className="mobile-nav__link">
          <Link to="/" onClick={() => setNavIsOpen(false)}>
            <IoHome className="mobile-nav__icon" />
            <span className="mobile-nav__text">Home</span>
          </Link>
        </li>
        <li className="mobile-nav__link">
          <Link to="/about" onClick={() => setNavIsOpen(false)}>
            <IoMdPerson className="mobile-nav__icon" />
            <span className="mobile-nav__text">About</span>
          </Link>
        </li>
        <li className="mobile-nav__link">
          <Link to="/#portfolio" onClick={() => setNavIsOpen(false)}>
            <IoMdBrush className="mobile-nav__icon" />
            <span className="mobile-nav__text">Portfolio</span>
          </Link>
        </li>
        <li className="mobile-nav__link">
          <HiDocumentDownload className="mobile-nav__icon" />
          <span className="mobile-nav__text">Download CV</span>
        </li>
        <li className="mobile-nav__link">
          <Link to="/contact" onClick={() => setNavIsOpen(false)}>
            <FaComments className="mobile-nav__icon" />
            <span className="mobile-nav__text">Contact</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default MobileNav;
