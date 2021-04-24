import React from "react";
import { IoMdPerson, IoMdBrush } from "react-icons/io";
import { HiDocumentDownload } from "react-icons/hi";
import { FaComments } from "react-icons/fa";

const MobileNav = ({ navIsOpen }) => {
  return (
    <nav className={navIsOpen ? "mobile-nav open" : "mobile-nav"}>
      <ul className="mobile-nav__links">
        <li className="mobile-nav__link">
          <IoMdPerson className="mobile-nav__icon" />
          <span className="mobile-nav__text">About</span>
        </li>
        <li className="mobile-nav__link">
          <IoMdBrush className="mobile-nav__icon" />
          <span className="mobile-nav__text">Portfolio</span>
        </li>
        <li className="mobile-nav__link">
          <HiDocumentDownload className="mobile-nav__icon" />
          <span className="mobile-nav__text">Download CV</span>
        </li>
        <li className="mobile-nav__link">
          <FaComments className="mobile-nav__icon" />
          <span className="mobile-nav__text">Contact</span>
        </li>
      </ul>
    </nav>
  );
};

export default MobileNav;
