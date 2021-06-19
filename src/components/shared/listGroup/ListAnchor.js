import React from "react";

const ListAnchor = ({ href, name, target, rel, download }) => {
  return (
    <li className="list-link">
      <a href={href} target={target} rel={rel} download={download}>
        {name}
      </a>
    </li>
  );
};

export default ListAnchor;
