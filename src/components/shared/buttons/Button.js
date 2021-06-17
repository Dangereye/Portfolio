import React from "react";

const Button = ({ type, cn, fn, icon, text }) => {
  return (
    <button type={type} className={`btn ${cn}`} onClick={fn}>
      {icon && icon}
      <span>{text}</span>
    </button>
  );
};

export default Button;
