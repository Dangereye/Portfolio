import React from "react";

const Next = ({ color, stroke }) => {
  return (
    <svg viewBox="0 0 315.4 315.4">
      <path
        d="M236.6 157.7L78.8 0M236.6 157.7L78.8 315.4"
        style={{ stroke: color, strokeWidth: stroke }}
      />
    </svg>
  );
};

export default Next;
