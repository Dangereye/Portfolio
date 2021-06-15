import React from "react";

const ListAnchor = ({ href, name, download }) => {
  return (
    <li className="list-link">
      <a href={href} download={download}>
        {name}
      </a>
    </li>
  );
};

export default ListAnchor;
