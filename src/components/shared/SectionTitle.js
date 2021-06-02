import React from "react";

const SectionTitle = ({ sub, title }) => {
  return (
    <>
      <div className="section-title">{sub}</div>
      <h2 className="section-title">{title}</h2>
    </>
  );
};

export default SectionTitle;
