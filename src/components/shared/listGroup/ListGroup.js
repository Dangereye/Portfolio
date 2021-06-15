import React from "react";

const ListGroup = ({ title, children }) => {
  return (
    <div className="list-group">
      <h3>{title} </h3>
      <ul>{children}</ul>
    </div>
  );
};

export default ListGroup;
