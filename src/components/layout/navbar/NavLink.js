import React from "react";
import { Link } from "react-router-dom";

const NavLink = ({ name }) => {
  return (
    <li className="nav__link">
      <Link to={`/#${name}`}>{name}</Link>
    </li>
  );
};

export default NavLink;
