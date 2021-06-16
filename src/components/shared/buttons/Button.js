import React from "react";

const Button = ({ cn, fn, icon, text }) => {
  return (
    <button className={`.btn ${cn}`} onClick={fn} aria-label={text}>
      {icon && icon}
      <span>{text}</span>
    </button>
  );
};

export default Button;
