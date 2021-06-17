import React from "react";

const ListGroup = ({ title, children, cn }) => {
  return (
    <div className={`list-group ${cn}`}>
      <h3>{title} </h3>
      <ul>{children}</ul>
    </div>
  );
};

export default ListGroup;
