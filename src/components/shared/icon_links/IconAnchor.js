import React from "react";

const IconAnchor = ({ href, name, icon }) => {
  return (
    <a href={href} aria-label={name} target="_blank" rel="noreferrer">
      {icon}
    </a>
  );
};

export default IconAnchor;
