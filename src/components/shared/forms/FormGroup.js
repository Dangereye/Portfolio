import React from "react";

const FormGroup = ({ name, type, value, fn, required }) => {
  return (
    <div className="form__group contact-item">
      <label htmlFor={name}>{name}</label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={fn}
        required={required}
      />
    </div>
  );
};

export default FormGroup;
