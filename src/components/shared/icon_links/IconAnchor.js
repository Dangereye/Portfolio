import React from "react";

const IconAnchor = ({ href, name, icon }) => {
  return (
    <a href={href} aria-label={name}>
      {icon}
    </a>
  );
};

export default IconAnchor;
