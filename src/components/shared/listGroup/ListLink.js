import React from "react";
import { Link } from "react-router-dom";

const ListLink = ({ to, name, fn }) => {
  return (
    <li className="list-link">
      <Link to={to} onClick={fn}>
        {name}
      </Link>
    </li>
  );
};

export default ListLink;
